import { useState } from "react";
import type { Props } from "@baloise/design-system-components";
import {
  BalButton,
  BalButtonGroup,
} from "@baloise/design-system-components-react";

function PropertyComponent() {
  const [myColor] = useState<Props.BalButtonColor>("info");

  return (
    <BalButtonGroup>
      <BalButton color="danger">My danger button</BalButton>
      <BalButton disabled>My disabled button</BalButton>
      <BalButton color={myColor}>My info button</BalButton>
    </BalButtonGroup>
  );
}

export default PropertyComponent;
