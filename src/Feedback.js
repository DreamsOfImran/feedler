import React from "react";
import CloseIcon from "./components/CloseIcon";
import FeedbackIcon from "./components/FeedbackIcon";
import "./index.scss";

class Feedback extends React.Component {
  state = {
    showModal: false,
    loading: false,
    submitted: false,
    feedbackEmail: "",
    feedbackType: "General",
    feedbackMessage: "",
    feedbackTypes: ["General", "Bug", "Idea"],
  };

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    setTimeout(() => {
      if (this.mounted) {
        this.setState({ submitted: true });
        setTimeout(() => {
          if (this.mounted) {
            this.setState({ showModal: false });
          }
        }, 1000);
      }
    }, 1000);
  };

  render() {
    const { showModal, feedbackTypes, feedbackType, submitted } = this.state;
    return (
      <div>
        {showModal && (
          <div className="absolute bottom-20 right-3">
            <div className="card-container">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="feedbackEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="feedbackEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    value={this.state.feedbackEmail}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div
                  className="w-full inline-flex rounded-md shadow-sm mb-4"
                  role="group"
                >
                  {feedbackTypes.map((ft, i) => (
                    <span
                      key={i + 2}
                      className={
                        feedbackType === feedbackTypes[i]
                          ? "feedback-type feedback-type-selected"
                          : "feedback-type"
                      }
                      onClick={() =>
                        this.setState({ feedbackType: feedbackTypes[i] })
                      }
                    >
                      {ft}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="feedbackMessage"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-left"
                  >
                    Feedback Message *
                  </label>
                  <textarea
                    id="feedbackMessage"
                    rows="5"
                    className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your feedback"
                    value={this.state.feedbackMessage}
                    onChange={this.handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  {submitted ? "Thanks for your feedback" : "Submit Feedback"}
                </button>
              </form>
            </div>
          </div>
        )}
        <div
          onClick={() => this.setState({ showModal: !showModal })}
          className="flex items-center justify-between whitespace-nowrap cursor-pointer shadow outline-none border-none absolute bottom-6 right-3 py-1.5 px-5 rounded bg-blue-200"
        >
          <div className="flex">
            {showModal ? <CloseIcon /> : <FeedbackIcon />}
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
