import { useState } from "react";
import { BalInput, BalText } from "@baloise/design-system-next-components-react";

function EventComponent() {
  const [myName, setMyName] = useState<string | undefined>();

  return (
    <div>
      <BalInput
        placeholder="Tell us your name"
        value={myName}
        onBalInput={(e) => setMyName(e.detail)}
      ></BalInput>
      <BalText>My name is {myName}</BalText>
    </div>
  );
}

export default EventComponent;
