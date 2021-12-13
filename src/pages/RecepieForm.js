import React, { Component } from "react";
import imgg from "../images/cookit.svg";
import Footer1 from "../components/Footer1";

class RecepieForm extends Component {
  state = {
    Title: "",
    Type: "",
    Ingredients: "",
    Steps: "",
    Time: "",
    NutritionalValue: "",
  };
  formHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div class="bg-gray-400			">
          <div class="antialiased text-bg-black px-6">
            <div class="max-w-xl mx-auto py-12 md:max-w-4xl">
              <h2 class="text-2xl font-bold">Recepie input</h2>

              <div class="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start 	">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <span class="text-black">Title</span>
                    <input type="text" class="form-input mt-1 block w-full" />
                  </label>
                  <label class="block">
                    <span class="text-black">Preparation</span>
                    <input
                      type="time"
                      class="form-input mt-1 block w-full"
                      placeholder="min"
                    />
                  </label>
                  <label class="block">
                    <span class="text-black">Select the diet</span>
                    <select
                      class="form-multiselect block w-full mt-1"
                      multiple=""
                    >
                      {" "}
                      <option> select</option>
                      <option>Vegan</option>
                      <option>Vegetarian</option>
                      <option>Non-vegetarian</option>
                      <option>Option 5</option>
                    </select>
                  </label>

                  <label class="block">
                    <span class="text-black">Ingredients</span>
                    <textarea
                      class="form-textarea mt-1 block w-full h-24"
                      rows="3"
                      placeholder="Enter the ingredients used..."
                    ></textarea>
                  </label>
                  <label class="block">
                    <span class="text-black">Steps</span>
                    <textarea
                      class="form-textarea mt-1 block w-full h-24"
                      rows="3"
                      placeholder="Enter the steps to be followed..."
                    ></textarea>
                  </label>

                  <label class="block">
                    <span class="text-black">Input (datetime-local)</span>
                    <input
                      type="datetime-local"
                      class="form-input mt-1 block w-full"
                    />
                  </label>

                  <label class="block">
                    <span class="text-black">Nutritional Value</span>
                    <input
                      type="number"
                      class="form-input mt-1 block w-full"
                      placeholder="Per Serving:..."
                    />
                  </label>
                  <label class="block">
                    <span class="text-black">Serves</span>
                    <input type="number" class="form-input mt-1 block w-full" />
                  </label>
                </div>
              </div>
            </div>
            <div class="max-w-4xl mx-auto py-12">
              <h2 class="text-2xl font-bold">Overall output</h2>
              <p class="mt-2 text-lg text-gray-500">
                A small description about the overall experience and from where
                did you learn it ..etc...
              </p>
              <div class="mt-8 grid grid-cols-2 gap-6 items-start">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <span class="text-black">Effort</span>
                    <input type="range" class="mt-1 block w-full" />
                  </label>
                  <label class="block">
                    <span class="text-black">Choose your color</span>
                    <input type="color" class="mt-1 block w-full" />
                  </label>

                  <label class="block">
                    <span class="text-black">Beautiful pics of the dish</span>
                    <input type="file" multiple class="mt-1 block w-full" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 />
      </div>
    );
  }
}

export default RecepieForm;
