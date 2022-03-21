import React, { Component } from "react";
import "../styles/recepieForm.css";
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
      <div className="background">
        <div className="antialiased text-bg-black px-6">
          <div className="max-w-xl mx-auto py-12 md:max-w-4xl">
            <h2 className="text-2xl font-bold">Recipe input</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start 	">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-white">Title</span>
                  <input type="text" className="form-input mt-1 block w-full" />
                </label>
                <label className="block">
                  <span className="text-white">Preparation</span>
                  <input
                    type="time"
                    className="form-input mt-1 block w-full px-2"
                    placeholder="min"
                  />
                </label>
                <label className="block">
                  <span className="text-white">Select the diet</span>
                  <select
                    className="form-multiselect block w-full mt-1"
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

                <label className="block">
                  <span className="text-white">Ingredients</span>
                  <textarea
                    className="form-textarea mt-1 block w-full h-24 p-2"
                    rows="3"
                    placeholder="Enter the ingredients used..."
                  ></textarea>
                </label>
                <label className="block">
                  <span className="text-white">Steps</span>
                  <textarea
                    className="form-textarea mt-1 block w-full h-24 p-2"
                    rows="3"
                    placeholder="Enter the steps to be followed..."
                  ></textarea>
                </label>

                <label className="block">
                  <span className="text-white">Input (datetime-local)</span>
                  <input
                    type="datetime-local"
                    className="form-input mt-1 block w-full"
                  />
                </label>

                <label className="block">
                  <span className="text-white">Nutritional Value</span>
                  <input
                    type="number"
                    className="form-input mt-1 block w-full"
                    placeholder="Per Serving:..."
                  />
                </label>
                <label className="block">
                  <span className="text-white">Serves</span>
                  <input
                    type="number"
                    className="form-input mt-1 block w-full"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-2xl font-bold">Overall output</h2>
            <p className="mt-2 text-lg ">
              A small description about the overall experience and from where
              did you learn it ..etc...
            </p>
            <div className="  grid grid-cols-1 gap-6 items-center">
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-white">Effort</span>
                  <input type="range" className="mt-1 block w-full" />
                </label>
                <label className="block">
                  <span className="text-white">Choose your color</span>
                  <input type="color" className="mt-1 block w-full" />
                </label>

                <label className="block">
                  <span className="text-white">Beautiful pics of the dish</span>
                  <input type="file" multiple className="mt-1 block w-full" />
                </label>
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
