import React from "react";

export type ContainerPropTypes = {}

export type ViewPropTypes = {
  onTyping: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
}