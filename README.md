### Example Character JSON

```json
{
    "name": "Edleguard",
    "full_name": "Edelgard von Hresvelg",
    "crest": [
        // NEED TO CHECK CRESTS FOR SPOILER WARNINGS
        {
            "name": "Minor Crest of Seiros",
            "description": "Legend has it that Saint Seiros bore this Crest and passed it down through House Hresvelg",
            "abilities": "Occasionally raises Mt when using combat arts"
        }
        ,
        {
            "name": "Major Crest of Flames",
            "description": "The Crest of the goddess who governs the world",
            "abilities": "Occasionally restores HP equal to 30% of damage dealt. Rarely raises Mt and stops counterattacks"
        }
    ],
    "age": 17,
    "height": "158 cm",
    "birthday": "06/22",
    "stats": {
        "base": {
            "hp": 29,
            "str": 13,
            "mag": 6,
            "dex": 5,
            "spd": 8,
            "luck": 5,
            "def": 6,
            "res": 4,
            "cha": 10
        },

        "max": {
            "hp": 29,
            "str": 13,
            "mag": 6,
            "dex": 5,
            "spd": 8,
            "luck": 5,
            "def": 6,
            "res": 4,
            "cha": 10

        },
        "growth_rate": {
            // as a %
            "hp": 40,
            "str": 55,
            "mag": 45,
            "dex": 45,
            "spd": 40,
            "luck": 30,
            "def": 35,
            "res": 35,
            "cha": 60
        },
        "proficiencies": {
            "strengths": ["Sword", "Axe", "Authority", "Heavy Armor"],
            "weaknesses": ["Bow", "Faith"],
            "budding_talent": {
                "skill":"Reason",
                "name": "Black Magic Crit +10",
                "effect": "Grants Crit +10 when using black magic"
            }
        }
    },
    "house": "Black Eagles",
    "country_of_origin": "Empire",
    "personal_skill": {
        "Imperial Lineage": "+20% experience is earned by unit"
    },
    "gifts": {
        "like": ["Carnation", "Armored Bear Stuffy", "Monarch Studies Book", "Board Game"],
        "dislike": ["Goddess Statuette", "Ceremonial Sword"],
        "lost_items": ["White Glove", "Time-worn Quill Pen", "Eastern Porcelain"]
    },
    "biography": "Full name Edelgard von Hresvelg. The imperial princess of the Adrestian Empire–a mighty nation with a rich history–and its next emperor. Within the Black Eagles, she’s the house leader. She has an extremely noble and dignified air to her, and is able to calmly assess and act upon the situation and the people around her.",


}

```

### Calendar

```json
[
    "Guardian Moon"
    "Pegasus Moon"
    "Lone Moon"
    "Great Tree Moon"
    "Harpstring Moon"
    "Garland Moon"
    "Blue Sea Moon"
    "Verdant Rain Moon"
    "Horsebow Moon"
    "Wyvern Moon"
    "Red Wolf Moon"
    "Ethereal Moon"
]

```
