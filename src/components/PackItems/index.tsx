import { CustomCard } from "../../containers/steps/begin.style";
import { Chips, TwoThird } from "../../containers/steps/beginsvgs";
import { datadetails } from "../../Data/Data";
import { useAppSelector } from "../../Redux/store/hooks";
import { ProductDetails } from "../ProductDetails";

type Props = {
  setClickedValue: () => void;
  Clicked: boolean;
  isShow?: () => void;
};

export const ProductsCard = (props: Props) => {
  const { setClickedValue, Clicked, isShow } = props;
  let { ordernumber } = useAppSelector((state) => state.ordernumber);
  const selectedId = datadetails?.filter((x) => x.id === ordernumber);
  return (
    <CustomCard style={{ width: 300 }}>
      <div className="align">
        <h2>Items</h2>
      </div>
      <div className="products">
        <span onClick={() => setClickedValue()}>
          <p>
            <ProductDetails
              ProductPic={selectedId?.[0]?.imageSmall as JSX.Element}
              p1={"SKU: 1965322809631234"}
              p2={` Color:  ${selectedId?.[0]?.color}`}
              p3={" Size: 48 "}
              chips={Clicked ? <TwoThird /> : <Chips />}
            />
          </p>
        </span>

        <span
          onClick={() => {
            setClickedValue();
          }}
        >
          <p>
            <ProductDetails
              ProductPic={selectedId?.[0]?.imageSmall as JSX.Element}
              p1={"SKU: 1965322809631234"}
              p2={"Color: Navy Blue"}
              p3={" Size: 48 "}
              chips={Clicked ? <TwoThird /> : <Chips />}
            />
          </p>
        </span>
        <span
          onClick={() => {
            setClickedValue();
          }}
        >
          <p>
            <ProductDetails
              ProductPic={selectedId?.[0]?.imageSmall as JSX.Element}
              p1={"SKU: 1965322809631234"}
              p2={"Color: Navy Blue"}
              p3={" Size: 48 "}
              chips={Clicked ? <TwoThird /> : <Chips />}
            />
          </p>
        </span>
      </div>
    </CustomCard>
  );
};
