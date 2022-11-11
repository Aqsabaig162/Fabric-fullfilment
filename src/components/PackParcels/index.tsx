import { Button } from "antd";
import React, { useState } from "react";
import { CustomCard } from "../../containers/steps/begin.style";
import { AddSymbol, Threedots } from "../../containers/steps/beginsvgs";
import { ParcelSize } from "../../Data/Data";
import { Parcelsize } from "../ParcelSize";

type Props = {
  isSelected: boolean;
  selectedProduct: ParcelSize | undefined;
  isShow: () => void;
};

export const PackParcelsCard = (props: Props) => {
  const { isSelected, selectedProduct, isShow } = props;

  return (
    <CustomCard style={{ width: 300 }}>
      <div className="align">
        <h2>Parcels</h2>
        <Button type="primary" className="btn1">
          <AddSymbol />
        </Button>
      </div>
      <div className="body">
        {isSelected ? (
          <>
            <div className="parcelProduct">
              <div>
                <Button type="primary" className="btnparcelproduct">
                  <AddSymbol />
                </Button>
              </div>
              <div>
                <Parcelsize
                  title={selectedProduct?.title}
                  dimension={selectedProduct?.dimension}
                />
              </div>
              <div>
                <Threedots />
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <span className="span" onClick={() => isShow()}>
          Complete pickup to start packing
        </span>
      </div>
    </CustomCard>
  );
};
