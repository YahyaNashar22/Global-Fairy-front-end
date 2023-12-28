import BarChart from "../../layout/BarCharLayout/BarCharLayout";
import PieChart from "../../components/charts/PieChart";
import LineChart from "../../components/charts/LineChart";
import Feedback from "../../components/charts/Feedback";





const ChartLayout=()=> {
 
    return (
      <div style={{ display: 'flex', flexDirection: 'column',paddingBottom:"3rem" }}>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
          <div style={{ flex: 1 }}>
            <BarChart />
          </div>
          <div style={{ flex: 1, paddingLeft:"2rem" }}>
            <PieChart />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1,paddingTop:"1rem"  }}>
          <div style={{ flex: 1, paddingLeft:"2rem" }}>
            <LineChart />
          </div>
          <div style={{ flex: 1, paddingLeft:"2rem" }}>
            <Feedback />
          </div>
        </div>
      </div>
    );
  
}


export default ChartLayout;