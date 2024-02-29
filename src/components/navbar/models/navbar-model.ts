/**
 * Represents a menu in the navigation bar.
 */
export interface NavbarItem {
    /**
     * label is the visible text link on the menu
     */
    label: string;
    
    /**
     * routeTo is the route that it will redirect to
     */
    routeTo: string;
}