import { ImgHTMLAttributes } from "react";
import { AvatarContainer, AvatarContent, AvatarImage } from "./styles";
import { PersonIcon } from "@radix-ui/react-icons";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size: string;
}

export function Avatar({ size, src, alt = "" }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : alt && alt.length > 1 ? (
        <AvatarContent color="gradientBlue">
          {alt.slice(0, 2).toUpperCase()}
        </AvatarContent>
      ) : (
        <AvatarContent color="azure">
          <PersonIcon className="personIcon" color="white" />
        </AvatarContent>
      )}
    </AvatarContainer>
  );
}
