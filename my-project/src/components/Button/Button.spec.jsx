import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe('<Button />', () => {

  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);

    const button = screen.getByRole('button', { name: /load more/i });
  });

});
