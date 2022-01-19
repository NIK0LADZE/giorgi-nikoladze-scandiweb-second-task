import React from "react";
import "./CheckoutProgress.style.scss";

class CheckoutProgress extends React.Component {
  render() {
    const { stepMap, currentStep } = this.props;
    const stepArr = Object.values(stepMap);
    const stepKeys = Object.keys(stepMap);
    const totalSteps = stepArr.length;
    const stepWidth = (1 / totalSteps) * 100 + "%";
    const currentStepIndex = stepKeys.indexOf(currentStep) + 1;

    return (
      <div className="CheckoutProgress">
        {stepArr.map((step, index) => {
          const { title } = step;
          index++;
          const isActive = currentStepIndex >= index ? true : false;

          return (
            <div
              key={index}
              className="ProgressBar"
              style={{ width: `calc(${stepWidth} - 10px)` }}
            >
              {isActive && <div className="FilledBar"></div>}
              {index < totalSteps && (
                <div className="StepInfo">
                  <div className={`Circle ${isActive ? "filled" : ""}`}>
                    {currentStepIndex > index && <div className="Tick"></div>}
                    {currentStepIndex <= index && (
                      <p className={`StepNumber ${isActive ? "active" : ""}`}>
                        {index}
                      </p>
                    )}
                    <p className={`StepTitle ${isActive ? "active" : ""}`}>
                      {title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CheckoutProgress;
