import { Icon } from "../Icon/icon";
import { NotificationLabel as StyledNotificationLabel } from "./styles";

export interface NotificationLabelProps {
  variant: string;
}

export function NotificationLabel({ variant }: NotificationLabelProps) {
 
    const IconMapper = {
      primary: <Icon viewBox="0 0 26 26" name="ExclamationMark" className="Icon" />,
      warning:<Icon  viewBox="0 0 26 26" name="ExclamationMark2" className="Icon"/>,
      success:<Icon  viewBox="0 0 26 26" name="Approve" className="Icon" />,
      danger: <Icon  viewBox="0 0 26 26" name="Close" className="Icon"/>,
    };
  
  return (
    <StyledNotificationLabel variant={variant}>
      {IconMapper[variant as keyof typeof IconMapper]}
    </StyledNotificationLabel>
  );
}
