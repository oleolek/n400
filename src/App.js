import { parseOfficeDataPoints } from './Data';
import DatePlot from './DatePlot';
import MapPlot from './MapPlot';
import './App.css';
import { seaData } from './data/sea';
import { allData } from './data/all';

function App() {
  const seaOfficeDataPoints = parseOfficeDataPoints(seaData).sort((a, b) => compareStrings(a.runDate, b.runDate));
  const allOfficeDataPoints = parseOfficeDataPoints(allData);
  return (
    <div className="App">
      <DatePlot officeDataPoints={seaOfficeDataPoints} />
      <MapPlot officeDataPoints={allOfficeDataPoints} />
    </div>
  );
}

function compareStrings(a, b) {
  if (b > a) {
    return 1;
  }
  if (b < a) {
    return -1;
  }
  return 0;
}

export default App;
