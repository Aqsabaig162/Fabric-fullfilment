import Bigrectangle from "../../images/BigRectangle.png";
import smallrectangle from "../../images/smallrectangle.png";
import { Button } from "antd";
import { useNavigate } from "react-router";
import { CustomSider } from "./sidebar.style";
import { ArrowUp, Phone, Mail, Line, Location } from "./rightsidersvgs";
import { useAppDispatch, useAppSelector } from "../../Redux/store/hooks";
import { setshowsidebar } from "../../Redux/features/showsidebar/showsidebarslice";
import { setordernumber } from "../../Redux/features/tabledata";
import { datadetails } from "../../Data/Data";
import { Completedpic, Completedpicsmall } from "../../Data/svgs";

export interface SideBarProps {}

export const SideBar2 = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let { ordernumber } = useAppSelector((state) => state.ordernumber);
  //Map
  // // let dataIds = datadetails.map((dataids) => dataids.id);
  // console.log(dataIds);

  // const filteredIds = (dataIds: any) => {
  //   return dataIds == ordernumber;
  // };
  // //Filter
  const selectedId = datadetails?.filter((x) => x.id === ordernumber);
  console.log(selectedId?.[0]?.id);
  const selectedImage = selectedId?.[0]?.image;
  const selectedImageSmall = selectedId?.[0]?.imageSmall;
  console.log(ordernumber);

  const begin = () => {
    navigate(`/steps/${ordernumber}`);
  };

  const Productdetails = (props: any) => {
    return (
      <div className="prodspan">
        <p className="imgsmall ">
          <>{selectedImageSmall}</>
        </p>
        <div className="Pdata">
          <div>
            <h3>Product Name</h3>
            {selectedId?.[0]?.productName}
          </div>
        </div>
        <div>
          <ArrowUp />
        </div>
      </div>
    );
  };

  return (
    <div>
      <CustomSider
        width={250}
        className="site-layout-background"
        theme="light"
        style={{ height: "100vh" }}
      >
        <h1>Order Details</h1>

        <div className="sidetop">
          <h3>Jamie Jones</h3>

          <p>
            <a>
              <Phone />
            </a>
            (456) 8929 1231
          </p>
          <p>
            <a>
              <Mail />
            </a>
            jamie.jones@domain.com
          </p>
          <p>
            <a>
              <Location />
            </a>
            500 7th Avenue, Manhatten, New York, NY, 10018
          </p>
        </div>
        <Line />

        <div className="secondside">
          <p>Items</p>
          <Productdetails />
          <>{selectedImage} </>

          <div className="lists">
            <ul className="ulli">
              <li>Weight</li>
              <li>Size (L x W x H)</li>
              <li>Color</li>
              <li>Price</li>
            </ul>

            <>
              <ul className="ulli2">
                <li> {selectedId?.[0]?.weight} </li>
                <li> {selectedId?.[0]?.size}</li>
                <li>{selectedId?.[0]?.color}</li>
                <li>{selectedId?.[0]?.price}</li>
              </ul>
            </>
          </div>
        </div>

        <Line />
        <Productdetails />
        <Line />
        <Button
          type="primary"
          className="beginbtn"
          onClick={() => {
            begin();
            dispatch(setshowsidebar(false));
          }}
        >
          {" "}
          Begin{" "}
        </Button>
      </CustomSider>
    </div>
  );
};
