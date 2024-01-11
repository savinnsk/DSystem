import { StepComponent } from "./step/step";
import { MultiStepContainer, MultiStepContent } from "./styles";

export interface MultiStepProps {
  steps?: number;
  currentStep?: number;
  label?: string;
}

export function MultiStep({
  steps = 4,
  currentStep = 1,
  label = "Etapa",
}: MultiStepProps) {
  return (
    <MultiStepContainer steps={steps}>
      {Array.from({ length: steps }, (_, i) => i + 1).map((mapKey) => {
        return (
          <MultiStepContent>
            <StepComponent
              currentStep={currentStep}
              mapKey={mapKey}
              label={label}
              isFinal={() => mapKey == steps}
            >
              {mapKey}
            </StepComponent>
          </MultiStepContent>
        );
      })}
    </MultiStepContainer>
  );
}

MultiStep.displayName = "MultiStep";
