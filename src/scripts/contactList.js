import domComponent from "./contactDisplay"
import collection from "./contactCollection"

collection.loadContacts().then(result => result.forEach(item => domComponent(item)))