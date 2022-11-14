import React, { useState } from "react";
import { ParcelModalcontent } from "./parcelcontent.style";
import { Button, Radio, RadioChangeEvent, Space } from "antd";
import { parcels, ParcelSize } from "../../../Data/Data";
import { Parcelsize } from "../../ParcelSize";

type Props = {
  handleChange: (e: RadioChangeEvent) => void;
  SelectedValue: number;
  handlebtnOnclick: () => void;
};

export const ParcelModalContent = (props: Props) => {
  const { handleChange, SelectedValue, handlebtnOnclick } = props;

  return (
    <ParcelModalcontent>
      <h2>Parcel Size</h2>
      <div className="parcel">
        <Radio.Group onChange={handleChange} value={SelectedValue}>
          <Space direction="vertical">
            {parcels.map((ParcelData) => {
              return (
                <Radio value={ParcelData.value}>
                  <Parcelsize
                    title={ParcelData.title}
                    dimension={ParcelData.dimension}
                  ></Parcelsize>
                </Radio>
              );
            })}
          </Space>
        </Radio.Group>
        <Button
          type="primary"
          className="btn2 "
          onClick={() => {
            handlebtnOnclick();
          }}
        >
          Select
        </Button>
      </div>
    </ParcelModalcontent>
  );
};
