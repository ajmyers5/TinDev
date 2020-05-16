# Project 3 TinDev
Christopher Wood, Lawrence De Belen, Andrew Myers

## USERSTORY:
AS A developer, I WANT to find and connect with other developers , SO THAT I can collaborate and network on current and future projects.


## TinDev:
TinDev is a networking app that allows developers to sift through Github profiles and save the ones that are interesting and discard those who don't meet your criteria. From the liked users you are able to view Github profile and send emails directly to users. 

## Motivation
We wanted to create an app that would aid developers in their search for those seeking help on a future project or assistance on a current project.   

## Screenshots
![Capture](https://user-images.githubusercontent.com/56177334/82126583-4a314e80-9773-11ea-9ae1-1f262efc4198.JPG)

![Capture3](https://user-images.githubusercontent.com/56177334/82126444-857f4d80-9772-11ea-809a-ff3d60998e72.JPG)

![Capture2](https://user-images.githubusercontent.com/56177334/82126450-90d27900-9772-11ea-83f0-922eb5a503c1.JPG)


## Code Example: 
class UserProfile extends Component {
  state = {
    user: [],
    likedUsers: [],
  };

  componentDidMount() {
    axios
      .get("/dev", {
        headers: {
          user: this.props.match.params.id,
        },
      })
      .then((response) => {
        this.setState({
          user: response.data,
        });

        if (this.state.user.likes.length > 0) {
          const likedUsersData = [];
          this.state.user.likes.forEach((id) => {
            axios
              .get("/dev", {
                headers: {
                  user: id,
                },
              })
              .then((response) => {
                likedUsersData.push(response.data);
                this.setState({ likedUsers: likedUsersData });
              });
          });
        }
      });
  }


## How to use?
Upon logging with Github username you are able to view, like, or remove users from the list. After liking specific profiles, you are then able to connect with users by using the email button. 

## Links
Github:https://github.com/ajmyers5/TinDev
Heroku:http://tindevku.herokuapp.com/