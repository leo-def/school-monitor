'use client'

import React from "react";
import { Renders } from "../_types/renders";
import { useGetRenderByAuthInfo } from "../_hooks/useGetRenderByAuthInfo";

export interface ProtectedComponentProps {
  subject?: string;
  action?: string;
  renders?: Renders;
}

export const ProtectedComponent = ({ renders }: ProtectedComponentProps) => {
  const render = useGetRenderByAuthInfo(renders);
  return (<React.Fragment>{render}</React.Fragment>);
};
