var plotTables = {
    "Plurals": ["Stones", "Keys", "Masks", "Swords", "Blades", "Gems", "Jewels", "Staves", "Rings", "Crowns", "Orbs"],
    "Capacity": ["Omens", "the Sun", "Power", "the Stars", "Shadows", "Light", "Flame", "the Heavens", "the Moon",
        "Storms"],
    "Count": ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen"],
    "Singulars": ["Stone", "Key", "Orb", "Book", "Mask", "Sword", "Hammer", "Staff", "Ring", "Crown"],
    "Name": ["Omega", "Alpha", "Prime", "Dragon", "Demon", "God", "Goblin", "Ultimate"],
    "One": ["One", "True", "First", "Perfect", "Last", "Universal"],
    "Status": ["Lost", "Dark", "Star", "Thunder", "Weeping", "Forgotten", "Burning", "Golden", "Sky", "Scintillating"],
    "Effects": ["source of great power", "held by the one true king", "a dark reflection of true power",
        "bearing the lifeforce of the whole world", "allowing for the control of all they who are dead",
        "the way to operate the lost magics of the primordials", "gifting either power or death",
        "marking those of great destiny throughout the ages"],
    "Origins": ["forged by the gods", "created in astral fire", "crafted by the dwarven gods",
        "breathed into creation by the old gods", "the remnants of the civilization before this one",
        "an artifact of ancient times", "the downfall of many great cities", "origins unknown"]
};

var plotStrings = [
    "The " + getRandomItem('Plurals') + " of " + getRandomItem('Capacity'),
    "The " + getRandomItem('Singulars') + " of " + getRandomItem('Capacity'),
    "The " + getRandomItem('Name') + " " + getRandomItem('Plurals'),
    "The " + getRandomItem('Name') + " " + getRandomItem('Singulars'),
    "The " + getRandomItem('Status') + " " + getRandomItem('Plurals'),
    "The " + getRandomItem('Status') + " " + getRandomItem('Singulars'),
    "The " + getRandomItem('Count') + " " + getRandomItem('Plurals'),
    "The " + getRandomItem('One') + " " + getRandomItem('Singulars')];

function getRandomItem(itemType) {
    return plotTables[itemType][Math.floor(Math.random() * plotTables[itemType].length)];
}

function getRandomPlot() {
    /**
     * To generate a plot device, create these three elements: Item (see 1), Effect (see 2), and Origin
     (see 3).
     To generate an Item, roll on Table 1 (d8):
     1. The plural (see 1a) of capacity (see 1c)
     2. The singular (see 1b) of capacity (see 1c)
     3. The name (see 1d) plural (see 1a)
     4. The name (see 1d) singular (see 1b)
     5. The status (see 1e) plural (see 1a)
     6. The status (see 1e) singular (see 1b)
     7. The count (see 1f) plural (see 1a)
     8. The one (see 1g) singular (see 1b)
     * Plurals
     * Capacity
     * Count
     * Singulars
     * Name
     * One
     * Status
     *
     * Effects
     * Origins
     *
     */
    return plotStrings[Math.floor(Math.random() * plotStrings.length)];

}

function writeRandomPlot() {
    document.writeln(getRandomPlot());
    document.writeln("<p>" + getRandomItem('Effects') + "</p>");
    document.writeln("<p>" + getRandomItem('Origins') + "</p>")
}
