import { useState } from "react";
import { BalButtonColor } from "@baloise/design-system-components";
import {
  BalButton,
  BalButtonGroup,
} from "@baloise/design-system-components-react";

function PropertyComponent() {
  const [myColor] = useState<BalButtonColor>("info");

  return (
    <BalButtonGroup>
      <BalButton color="danger">My danger button</BalButton>
      <BalButton disabled>My disabled button</BalButton>
      <BalButton color={myColor}>My info button</BalButton>
    </BalButtonGroup>
  );
}

export default PropertyComponent;
