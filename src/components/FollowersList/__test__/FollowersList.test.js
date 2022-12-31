import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList'
import { BrowserRouter } from 'react-router-dom';


describe("Followers List Async Tests", () => {

    beforeEach(() => {
        console.log('Running before each test');
        
    })

    beforeAll(() => { console.log('Running once before all tests'); })
    
    it('Single Follower Item is rendered', async () => {
        render(
            <FollowersList />, {wrapper:BrowserRouter}
        );
        const followerItemElement = await screen.findByTestId("follower-item-0");
        // screen.debug(followerItemElement)
        expect(followerItemElement).toBeInTheDocument();
    });
    
    it('All 5 Follower Items are rendered', async () => {
        render(
            <FollowersList />, {wrapper:BrowserRouter}
        );
        const followerItemsElement = await screen.findAllByTestId(/follower-item-/i);
        // screen.debug(followerItemsElement)
        expect(followerItemsElement.length).toBe(5);
    });
    
})