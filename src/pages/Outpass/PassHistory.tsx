import { Card } from '@material-tailwind/react'
import wardenTableData from '../../constants/wardenTable.json'

export function PassHistory() {
  const data = wardenTableData
  return (
    <>
      <Card className="mt-5">
        <table className="min-w-full table-auto rounded-sm ">
          <thead>
            <tr className="bg-[#4D4D29] text-white">
              <th className="border-2 p-3 font-normal">Place</th>
              <th className="border-2 p-3 font-normal">Outpass ID</th>
              <th className="border-2 p-3 font-normal">Out Date</th>
              <th className="border-2 p-3 font-normal">In Date</th>
              <th className="border-2 p-3 font-normal">Out Time</th>
              <th className="border-2 p-3 font-normal">In Time</th>
              <th className="border-2 p-3 font-normal">Outing Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-[#e8e7d8] text-xs">
                <td className="border-2 p-3">{item.place}</td>
                <td className="border-2 p-3">{item.outpassId}</td>
                <td className="border-2 p-3">{item.outDate}</td>
                <td className="border-2 p-3">{item.inDate}</td>
                <td className="border-2 p-3">{item.outTime}</td>
                <td className="border-2 p-3">{item.inTime}</td>
                <td className="border-2 p-3">{item.outingType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}
