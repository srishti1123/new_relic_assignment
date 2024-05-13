import React from "react";
 
import { AreaChart, LineChart ,PieChart,BarChart,Scatter} from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
return (
<div className="heading">
<h1>hiii everyone</h1>
<AreaChart
accountId={4438260}
query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2MHxJTkZSQXxOQXwyNDEzMzU5OTc4MDM1MjEwOTU4') TIMESERIES AUTO"
fullWidth
/>
<LineChart
accountId={4438260}
query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2MHxJTkZSQXxOQXwyNDEzMzU5OTc4MDM1MjEwOTU4') TIMESERIES AUTO"
fullWidth
/>
<BarChart
            accountId={4438260}
            query= "SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2MnxJTkZSQXxOQXwxNDc5NjY3NjY2MzkzNjIzODQ1') TIMESERIES AUTO"
            fullWidth
/>
</div> 

)};
export default index;