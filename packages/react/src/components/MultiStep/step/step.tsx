import { BorderLine, Step, StepContent, Label, StepContainer } from "./styles";
import { Icon } from "../../Icon/icon";

interface StepProps {
  children: React.ReactNode;
  currentStep: number;
  mapKey: number;
  label?: string;

  isFinal: () => boolean;
}

export function StepComponent({
  children,
  currentStep,
  mapKey,
  label,
  isFinal,
}: StepProps) {
  return (
    <StepContainer>
      <StepContent isActive={() => currentStep === mapKey} key={mapKey}>
        <Step isNumeric={() => currentStep <= mapKey}>
          
          {currentStep > mapKey && <Icon
            color="#fff"
            viewBox="0 0 20 20"
            name="ApproveTick"
            className="check" /> }
          {currentStep <= mapKey && children}
        </Step>
        <Label isPassed={() => currentStep >= mapKey}>{label}</Label>
      </StepContent>
      {!isFinal() && (
        <BorderLine isActive={() => currentStep > mapKey} />
      )}
    </StepContainer>
  );
}
