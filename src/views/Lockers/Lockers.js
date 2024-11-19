import React from "react";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import LiquidityLock from "../LiquidityLock/LiquidityLock";
import TokenLock from "../TokenLock/TokenLock";

const Lockers = () => {
  return (
    <div>
      <CustomTabs
        headerColor="info"
        title=""
        tabs={[
          {
            tabName: "Liquidity Lock",
            tabIcon: null,
            tabContent: <LiquidityLock/>
          },
          {
            tabName: "Token Lock",
            tabIcon: null,
            tabContent: <TokenLock/>
          }
        ]}
      />
    </div>
  );
}

export default Lockers;
