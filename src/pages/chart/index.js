import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { CanvasJSChart } from 'canvasjs-react-charts';
import { useParams } from "react-router-dom";
import { getChartData } from '../../middleware';
import { Container } from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Loader from '../../components/loader';

const Chart = () => {
  const paramsArr = useParams().currencies.split('&');
  const dispatch = useDispatch();

  const chartData = useSelector((state) => state.currencyTimeseriesFetched ? state.currencyTimeseriesFetched : null);
  const chartLoading = useSelector((state) => state.currencyTimeseriesLoading);
  const chartError = useSelector((state) => state.currencyTimeseriesError);

  const [currency1, setCurrency1] = useState([]);
  const [currency2, setCurrency2] = useState([]);
  console.log('body');
  
  useEffect(() => {
    if (paramsArr) {
      const date = new Date();
      const currDate = date.toISOString().split('T')[0];
      const prvDateMonth = new Date(date.getFullYear(), date.getMonth() - 2, date.getDate()).toISOString().split('T')[0];
      dispatch(getChartData(prvDateMonth, currDate, paramsArr.toString()));
      console.log('useEffect1');

    }
  }, []);

  useEffect(() => {
    if (chartData?.rates) for (const [key, value] of Object.entries(chartData?.rates)) {
      let date = new Date(key).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});
      setCurrency1((perv) => [...perv, { label: date, y: value[paramsArr[0]]}]);
      setCurrency2((perv) => [...perv, { label: date, y: value[paramsArr[1]]}]);
      console.log('useEffect2');
    }
  }, [chartData]);

  const options = {
    animationEnabled: true,	
    exportEnabled: true,
    title: {
      padding: 25,
      text: "Time series for a daily currency rate",
      fontFamily: 'Montserrat',
      fontSize: 45,
      fontWeight: 'bold'
    },
    toolTip: {
      shared: true
    },
    axisY: {
      includeZero: false
    },
    data: [{
      type: "spline",
      name: paramsArr[0],
      showInLegend: true,
      dataPoints: currency1
    },
    {
      type: "spline",
      name: paramsArr[1],
      showInLegend: true,
      dataPoints: currency2
    }]
  }
 
  return <Container maxWidth="md">
          <div className="container--centrated">
            <div className="block-wrapper">
              <a className="btn" href={`/convert-currency`}>
              <ArrowBackIosIcon />
              Back
            </a>
      </div>
      {chartError ? 
        <p className="error-message">{chartError.message}</p>
        : (!chartLoading && <CanvasJSChart options = {options} />) || <Loader />
      }
		  </div>
    </Container>
}

export default Chart;
