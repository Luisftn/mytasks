//Icons
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

function CommomCard() {
  return (
    <div className="card">
      <p>Test 1</p>
      <button>
        <Icon path={mdiDeleteOutline} size={1.3} color="#FF0000" />
      </button>
    </div>
  );
}

export default CommomCard;
