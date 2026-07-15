var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}


// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)

const PRESTIGE_UPGRADES = {
    11: {
        title: "Triple Points",
        description: "Triple your point gain.",
        cost: new MetaNum(100),

        effect() {
            return new MetaNum(3)
        },

        effectDisplay() {
            return format(upgradeEffect(this.layer, this.id)) + "x"
        },
    },
}

addLayer("p", {
    name: "prestige",
    symbol: "P",
    position: 0,

    startData() {
        return {
            unlocked: true,
            points: new MetaNum(0),
        }
    },

    color: "#4BDC13",
    requires: new MetaNum(10),
    resource: "prestige points",
    baseResource: "points",
    baseAmount() { return player.points },

    type: "normal",
    exponent: 0.5,

    gainMult() {
        let mult = new MetaNum(1)
        return mult
    },

    gainExp() {
        return new MetaNum(1)
    },

    row: 0,

    hotkeys: [
        {
            key: "p",
            description: "P: Reset for prestige points",
            onPress() {
                if (canReset(this.layer))
                    doReset(this.layer)
            }
        },
    ],

    upgrades: PRESTIGE_UPGRADES,

    layerShown() {
        return true
    }
})


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
})
