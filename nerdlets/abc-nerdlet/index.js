import React from "react";
 
import { AreaChart, LineChart, PieChart,BarChart } from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading"><P>Hi! everyone</P>
 
   <Grid>
   
    <GridItem columnSpan={5}>
    <AreaChart
          accountId={4438260}
           query= "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2MHxJTkZSQXxOQXwyNDEzMzU5OTc4MDM1MjEwOTU4') TIMESERIES AUTO"
             fullWidth
          />
          </GridItem>
 
          <GridItem columnSpan={5}>
          <LineChart
            accountId={4438260}
           query ="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI2MHxJTkZSQXxOQXwyNDEzMzU5OTc4MDM1MjEwOTU4') TIMESERIES AUTO      " 
                 fullWidth
          />
          </GridItem>
 
          <GridItem columnSpan={5}>
         <PieChart
            accountId={4438260}
            query= "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2MHxJTkZSQXxOQXwyNDEzMzU5OTc4MDM1MjEwOTU4') TIMESERIES AUTO "
            fullWidth
          />
          </GridItem>
 
          <GridItem columnSpan={5}>
            <BarChart
            accountId={4438260}
            query ="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI2MHxJTkZSQXxOQXwyNDEzMzU5OTc4MDM1MjEwOTU4') TIMESERIES AUTO     "
            fullWidth
          />
          </GridItem>
         
   
     </Grid>
    </div>
  );
};
 
export default index;
