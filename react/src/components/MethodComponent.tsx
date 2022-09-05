import {
  BalSelect,
  BalSelectOption,
  BalButton,
} from "@baloise/design-system-next-components-react";
import { useRef } from "react";

function MethodComponent() {
  const selectRef = useRef<HTMLBalSelectElement>(null);

  function chooseTennis() {
    selectRef.current?.select("tennis");
  }

  return (
    <div>
      <BalSelect ref={selectRef} placeholder="Choose your hobby">
        <BalSelectOption label="Tennis" value="tennis">
          Tennis
        </BalSelectOption>
        <BalSelectOption label="Soccer" value="soccer">
          Soccer
        </BalSelectOption>
        <BalSelectOption label="Other" value="other">
          Other
        </BalSelectOption>
      </BalSelect>
      <BalButton class="mt-4" onClick={() => chooseTennis()}>
        Choose Tennis
      </BalButton>
    </div>
  );
}

export default MethodComponent;
