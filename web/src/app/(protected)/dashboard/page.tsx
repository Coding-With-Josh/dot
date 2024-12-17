import { CryptoCard } from "@/components/dashboard/crypto-card"
import { PortfolioToken } from "@/components/dashboard/portfolio-token"
import { ExpectedEvent } from "@/components/dashboard/expected-event"
import { Chart } from "@/components/dashboard/chart"
import { ActivityChart } from "@/components/dashboard/activity-chart"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown01Icon, ArrowDownIcon, ChevronDown, ChevronUp, Delete, MoreHorizontal, Plus, Trash2 } from 'lucide-react'
import { BitcoinIcon, EthereumIcon, TetherIcon, PolygonIcon } from "@/components/dashboard/icons"

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center justify-between w-full mb-6">
        <h1 className="text-2xl font-semibold text-white">DAO1 Activity Dashboard</h1>
        <div className="flex flex-row items-center justify-center gap-4">
          <Button className="bg-muted text-muted-foreground gap-2">View 1 <ArrowDownIcon /></Button>
          <Button size="icon" className="bg-transparent"><Trash2 /></Button>
          <Button className="bg-blue-600 hover:bg-blue-600/80 text-white rounded-md gap-3"> <Plus /> Add Widget</Button>
        </div>
      </div>


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CryptoCard name="Bitcoin" icon={<BitcoinIcon />} price="$3,470,780" change={8.2} />
        <CryptoCard name="ETH" icon={<EthereumIcon />} price="$3,480" change={-5.4} />
        <CryptoCard name="Tether" icon={<TetherIcon />} price="$3,480" change={0.5} />
        <CryptoCard name="Polygon" icon={<PolygonIcon />} price="$3,480" change={-2.8} />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2 bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Portfolio Tokens</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 rounded-md p-0">
              <MoreHorizontal className="h-4 w-4 text-dao-text" />
            </Button>
          </CardHeader>
          <CardContent>
            <PortfolioToken name="Aptos" amount="4,371 APT" value="$3,480" change={8.2} />
            <PortfolioToken name="Solana" amount="3,700 SOL" value="$3,480" change={-5.4} />
            <PortfolioToken name="Polygon" amount="4,371 MATIC" value="$3,480" change={0.5} />
          </CardContent>
        </Card>

        <Card className="bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Expected Events</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 w-8 rounded-md p-0">
              <MoreHorizontal className="h-4 w-4 text-dao-text" />
            </Button>
          </CardHeader>
          <CardContent>
            <ExpectedEvent name="Google I/O Interview" date="5/7/24" time="10:30" />
            <ExpectedEvent name="Google I/O Interview" date="5/7/24" time="10:30" />
            <ExpectedEvent name="Google I/O Interview" date="5/7/24" time="10:30" />
          </CardContent>
        </Card>

        <Card className="col-span-2 bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Earnings Activity</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-8 rounded-md px-2 text-xs text-dao-text">
                1D
              </Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-md bg-dao-purple px-2 text-xs text-white">
                1W
              </Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-md px-2 text-xs text-dao-text">
                1M
              </Button>
              <Button variant="ghost" size="sm" className="h-8 rounded-md px-2 text-xs text-dao-text">
                1Y
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$8,000.00</div>
            <p className="text-xs text-dao-text">Total Earnings</p>
            <Chart />
          </CardContent>
        </Card>

        <Card className="bg-dao-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Activity</CardTitle>
            <Button variant="ghost" size="sm" className="h-8 space-x-2 rounded-md bg-dao-input px-3 text-xs text-white">
              <span>Weekly</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ActivityChart />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">$7,400</div>
                <p className="text-xs text-dao-text">This Week</p>
              </div>
              <div className="flex items-center space-x-1 text-dao-green">
                <ChevronUp className="h-4 w-4" />
                <span className="text-sm font-medium">32%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

