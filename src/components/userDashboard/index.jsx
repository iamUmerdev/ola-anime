import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Label } from '@/components/ui/label';

import { Checkbox } from '@/components/ui/checkbox';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Progress } from '@/components/ui/progress';
import {
  ClipboardCopy,
  Facebook,
  Instagram,
  Mail,
  Share2,
  Bell,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

// Dummy notifications
const notifications = [
  'Your itinerary has been updated!',
  'New destinations added to your preferences.',
  'You have 2 new referrals.',
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notifications
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit profile modal
  const [budget, setBudget] = useState(0); // State for edit profile modal

  const itineraries = [
    {
      id: 1,
      name: 'Weekend in Detroit',
      date: '2023-05-15',
      description: 'Explore the best of Detroit in 48 hours',
    },
    {
      id: 2,
      name: 'Detroit Art Tour',
      date: '2023-06-22',
      description: "Discover Detroit's vibrant art scene",
    },
    {
      id: 3,
      name: 'Motor City Adventure',
      date: '2023-07-10',
      description: "Experience Detroit's automotive heritage",
    },
  ];

  const referralProgress = {
    creditsEarned: 75,
    creditsNeeded: 100,
    friendsReferred: 3,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="itineraries">Itineraries</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="add-itinerary">Add Itinerary</TabsTrigger>{' '}
          {/* New tab */}
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">John Doe</h2>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
                {/* Notification Icon */}
                <div className="relative">
                  <Bell
                    className="cursor-pointer"
                    onClick={() => setShowNotifications(!showNotifications)}
                  />
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                      <ul>
                        {notifications.map((notification, index) => (
                          <li key={index} className="py-2">
                            {notification}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <Button onClick={() => setIsEditModalOpen(true)}>
                Edit Profile
              </Button>

              {/* Edit Profile Modal */}
              <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email" />
                    <Button onClick={() => setIsEditModalOpen(false)}>
                      Save Changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="itineraries">
          <Card>
            <CardHeader>
              <CardTitle>Saved Itineraries</CardTitle>
              <CardDescription>
                View and manage your saved trips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {itineraries.map((itinerary) => (
                  <li
                    key={itinerary.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{itinerary.name}</h3>
                      <p className="text-sm text-gray-500">{itinerary.date}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedItinerary(itinerary)}
                        >
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Share Your Itinerary</DialogTitle>
                          <DialogDescription>
                            {itinerary.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <img
                              src="/placeholder.svg"
                              alt={itinerary.name}
                              className="col-span-4 h-40 w-full object-cover rounded-md"
                            />
                          </div>
                          <div className="flex justify-between">
                            <Button variant="outline" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Instagram className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              id="itinerary-link"
                              value={`https://visit-detroit.com/itinerary/${itinerary.id}`}
                              readOnly
                            />
                            <Button size="sm" className="shrink-0">
                              Copy
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referrals">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Program</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Your Referral Code
                    </CardTitle>
                    <CardDescription>
                      Share this code with your friends
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      DETROITYXDEHA
                    </code>
                    <Button size="icon" variant="ghost">
                      <ClipboardCopy className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Referral Stats</CardTitle>
                    <CardDescription>
                      See how many friends you have referred
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="p-0">
                          View Referral Progress
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Referral Progress</DialogTitle>
                          <DialogDescription>
                            Track your referral rewards
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span>Credits Earned</span>
                              <span className="font-semibold">
                                ${referralProgress.creditsEarned}
                              </span>
                            </div>
                            <Progress
                              value={
                                (referralProgress.creditsEarned /
                                  referralProgress.creditsNeeded) *
                                100
                              }
                              className="w-full"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                              ${referralProgress.creditsEarned} / $
                              {referralProgress.creditsNeeded} to next reward
                            </p>
                          </div>
                          <p>
                            {referralProgress.friendsReferred} friends referred
                          </p>
                          <Button className="w-full">
                            Invite More Friends
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Invite Friends</CardTitle>
                  <CardDescription>
                    Send referral invitations to your friends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" /> Send Invitations
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add-itinerary">
          <div className="border rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Add New Itinerary</h2>
            </div>
            <Button onClick={() => setSelectedItinerary({})}>
              Add Itinerary
            </Button>

            {/* Modal to Add Itinerary */}
            {selectedItinerary && (
              <Dialog
                open={Boolean(selectedItinerary)}
                onOpenChange={setSelectedItinerary}
              >
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Itinerary</DialogTitle>
                    <DialogDescription>
                      Fill in the details to create a new itinerary.
                    </DialogDescription>
                  </DialogHeader>

                  {/* Form Content */}
                  <div className="space-y-4">
                    {/* Purpose of Visit */}
                    <div>
                      <Label>Purpose of Visit</Label>
                      <select className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="" disabled selected>
                          Select purpose
                        </option>
                        <option value="leisure">Leisure</option>
                        <option value="business">Business</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Duration */}
                    <div>
                      <Label>Duration</Label>
                      <select className="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="" disabled selected>
                          Select duration
                        </option>
                        <option value="weekend">Weekend</option>
                        <option value="week">1 Week</option>
                        <option value="month">1 Month</option>
                      </select>
                    </div>

                    {/* Interests */}
                    <div>
                      <Label>Interests</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Checkbox id="music" />
                          <Label htmlFor="music" className="ml-2">
                            Music
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="sports" />
                          <Label htmlFor="sports" className="ml-2">
                            Sports
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="food" />
                          <Label htmlFor="food" className="ml-2">
                            Food
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="art" />
                          <Label htmlFor="art" className="ml-2">
                            Art
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="nightlife" />
                          <Label htmlFor="nightlife" className="ml-2">
                            Nightlife
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="history" />
                          <Label htmlFor="history" className="ml-2">
                            History
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Budget Slider */}
                    <div>
                      <Label>Budget (USD)</Label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          step="100"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                        <span className="text-sm text-gray-700">${budget}</span>
                      </div>
                    </div>

                    {/* Dining Preferences */}
                    <div>
                      <Label>Dining Preferences</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Checkbox id="fine-dining" />
                          <Label htmlFor="fine-dining" className="ml-2">
                            Fine dining
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="casual" />
                          <Label htmlFor="casual" className="ml-2">
                            Casual
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="vegetarian" />
                          <Label htmlFor="vegetarian" className="ml-2">
                            Vegetarian
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="local-cuisine" />
                          <Label htmlFor="local-cuisine" className="ml-2">
                            Local cuisine
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Activity Preferences */}
                    <div>
                      <Label>Activity Preferences</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Checkbox id="sports-events" />
                          <Label htmlFor="sports-events" className="ml-2">
                            Sports events
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="live-concerts" />
                          <Label htmlFor="live-concerts" className="ml-2">
                            Live concerts
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="sightseeing" />
                          <Label htmlFor="sightseeing" className="ml-2">
                            Sightseeing
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="museums" />
                          <Label htmlFor="museums" className="ml-2">
                            Museums
                          </Label>
                        </div>
                        <div>
                          <Checkbox id="outdoor-activities" />
                          <Label htmlFor="outdoor-activities" className="ml-2">
                            Outdoor activities
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button onClick={() => setSelectedItinerary(null)}>
                      Save Itinerary
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
