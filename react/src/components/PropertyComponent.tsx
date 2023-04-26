import { useState } from "react";
import {
  BalButton,
  BalButtonGroup,
} from "@baloise/design-system-components-react";

function PropertyComponent() {
  const [myColor] = useState<BalProps.BalButtonColor>("info");

  return (
    <BalButtonGroup>
      <BalButton color="danger">My danger button</BalButton>
      <BalButton disabled>My disabled button</BalButton>
      <BalButton color={myColor}>My info button</BalButton>
    </BalButtonGroup>
  );
}

export default PropertyComponent;
