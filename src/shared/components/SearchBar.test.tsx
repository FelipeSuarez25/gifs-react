import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () =>{

    test('should render searchbar correctly', () => { 
        const { container } = render(<SearchBar onQuery={() => {}}/>);

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
     });
});