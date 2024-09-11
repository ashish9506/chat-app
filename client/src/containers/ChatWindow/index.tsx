import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PaperPlaneIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John", content: "Hey, how are you?" },
    {
      id: 2,
      sender: "You",
      content: "I'm doing great, thanks! How about you?",
    },
    {
      id: 3,
      sender: "John",
      content: "I'm good too. Did you finish the project?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", content: inputMessage },
      ]);
      setInputMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200">
        <div className="p-4">
          <Button className="w-full justify-start" variant="outline">
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-80px)]">
          {["John", "Alice", "Bob", "Carol"].map((name, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 hover:bg-gray-100 cursor-pointer"
            >
              <Avatar>
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
                />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-gray-500">Last message...</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <Card className="flex-1 m-4 overflow-hidden">
          <CardHeader>
            <CardTitle>Chat with John</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-250px)]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${
                    message.sender === "You" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "You"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{message.sender}</p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <div className="p-4 bg-white border-t border-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex space-x-2"
          >
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit">
              <PaperPlaneIcon className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
