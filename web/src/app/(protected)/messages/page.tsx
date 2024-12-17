import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MessagesPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold text-white">Messages</h1>
      
      <Card className="bg-dao-card">
        <CardHeader>
          <CardTitle className="text-white">Inbox</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-dao-text">No new messages</p>
        </CardContent>
      </Card>
    </>
  )
}

