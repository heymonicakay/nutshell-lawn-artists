import { eventForm } from "./events/EventForm.js"
import { TaskList } from "./tasks/TaskList.js";
import { ListFriends } from "./friends/FriendList.js"
import { ListArticles } from "./articles/ArticleList.js"
import { ListMessages } from "./messages/MessageList.js";
import "./tasks/TaskForm.js";
import "./friends/FriendForm.js"
import  {ListWeather} from "./weather/WeatherList.js"
import { eventForm } from "./events/EventForm.js";
import { eventList } from "./events/EventList.js";


export const Nutshell = () => {

    eventForm()
    TaskList()
    ListFriends()
    ListArticles()
    ListWeather()
    ListMessages()
    eventList()
}