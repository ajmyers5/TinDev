import React from "react";

function devProfileCard() {
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Joe Exotic</Card.Title>
    <Card.Text>
     That bitch Carol Baskin
    </Card.Text>

    <Button variant="primary far fa-thumbs-up">Like</Button>
    <ButtonGroup toggle className="mb-2">
    <ToggleButton type="checkbox" defaultChecked value="1">
      Checked
    </ToggleButton>
  </ButtonGroup>

  <Button variant="primary far fa-thumbs-down">Dislike</Button>
    <ButtonGroup toggle className="mb-2">
    <ToggleButton type="checkbox" defaultChecked value="1">
      Checked
    </ToggleButton>
  </ButtonGroup>
  </Card.Body>
</Card>
    );
}
export default devProfileCard;