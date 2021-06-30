/** @module Minecraft */
/** 
 * Contains information related to changes to a piston expanding or retracting.
 * @hideconstructor
 * @class
 */
class ActivatePistonEvent {
    /**
      * True if the piston is the process of expanding.
      * @name ActivatePistonEvent#isExpanding
      * @type {boolean}
      */
    /**
      * Contains additional properties and details of the piston.
      * @name ActivatePistonEvent#piston
      * @type {module:Minecraft~BlockPistonComponent}
      */
    

     constructor() {
      /**
        * True if the piston is the process of expanding.
        * 
        * @type {boolean}
        */
      this['isExpanding'];
      /**
        * Contains additional properties and details of the piston.
        * 
        * @type {module:Minecraft~BlockPistonComponent}
        */
      this['piston'];
    }
  }
  
/** 
 * Manages callbacks that are connected to piston activations.
 * @hideconstructor
 * @class
 */
class ActivatePistonEventSignal {
    
/**
  * Adds a callback that will be called when a piston expands or retracts.
  *
  * @method
  * @param {function(module:Minecraft~ActivatePistonEvent):undefined} callback -  
  * @returns {function(module:Minecraft~ActivatePistonEvent):undefined}
  */
subscribe (callback) {
}
/**
  * Removes a callback from being called when a piston expands or retracts.
  *
  * @method
  * @param {function(module:Minecraft~ActivatePistonEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class ActorAddEffectEvent {
    /**
      * @name ActorAddEffectEvent#effect
      * @type {module:Minecraft~Effect}
      */
    /**
      * @name ActorAddEffectEvent#effectState
      * @type {number}
      */
    /**
      * @name ActorAddEffectEvent#entity
      * @type {module:Minecraft~Entity}
      */
    

     constructor() {
      /**
        * 
        * @type {module:Minecraft~Effect}
        */
      this['effect'];
      /**
        * 
        * @type {number}
        */
      this['effectState'];
      /**
        * 
        * @type {module:Minecraft~Entity}
        */
      this['entity'];
    }
  }
  
/** 
 * Manages callbacks that are connected to when an effect is added to an entity.
 * @hideconstructor
 * @class
 */
class AddEffectEventSignal {
    
/**
  * Adds a callback that will be called when an effect is added to an entity.
  *
  * @method
  * @param {function(module:Minecraft~ActorAddEffectEvent):undefined} callback -  
  * @returns {function(module:Minecraft~ActorAddEffectEvent):undefined}
  */
subscribe (callback) {
}
/**
  * Removes a callback from being called when an effect is added to an entity.
  *
  * @method
  * @param {function(module:Minecraft~ActorAddEffectEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * When added, this component makes the entity spawn with a rider of the specified entityType.
 * @hideconstructor
 * @class
 */
class AddRider {
    /**
      * The type of entity that is added as a rider for this entity when spawned under certain conditions.
      * @name AddRider#entityType
      * @type {string}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:addrider.
      * @name AddRider#id
      * @type {string}
      */
    /**
      * Optional spawn event to trigger on the rider when that rider is spawned for this entity.
      * @name AddRider#spawnEvent
      * @type {string}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * The type of entity that is added as a rider for this entity when spawned under certain conditions.
        * 
        * @type {string}
        */
      this['entityType'];
      /**
        * Identifier of this component. Should always be minecraft:addrider.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Optional spawn event to trigger on the rider when that rider is spawned for this entity.
        * 
        * @type {string}
        */
      this['spawnEvent'];
    }
  }
  
/** 
 * Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.
 * @hideconstructor
 * @class
 */
class Ageable {
    /**
      * List of items that the entity drops when it grows up.
      * @name Ageable#dropItems
      * @type {Array.<{any}>}
      * @throws This function can throw errors.
      */
    /**
      * Amount of time before the entity grows up, -1 for always a baby.
      * @name Ageable#duration
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.
      * @name Ageable#feedItems
      * @type {Array.<{module:Minecraft~EntityDefinitionFeedItem}>}
      * @throws This function can throw errors.
      */
    /**
      * Event to run when this entity grows up.
      * @name Ageable#growUp
      * @type {module:Minecraft~Trigger}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:ageable.
      * @name Ageable#id
      * @type {string}
      */
    

     constructor() {
      /**
        * List of items that the entity drops when it grows up.
        * 
        * @type {Array.<{any}>}
        */
      this['dropItems'];
      /**
        * Amount of time before the entity grows up, -1 for always a baby.
        * 
        * @type {number}
        */
      this['duration'];
      /**
        * List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.
        * 
        * @type {Array.<{module:Minecraft~EntityDefinitionFeedItem}>}
        */
      this['feedItems'];
      /**
        * Event to run when this entity grows up.
        * 
        * @type {module:Minecraft~Trigger}
        */
      this['growUp'];
      /**
        * Identifier of this component. Should always be minecraft:ageable.
        * 
        * @type {string}
        */
      this['id'];
    }
  }
  
/** 
 * Contains information related to changes before a piston expands or retracts.
 * @hideconstructor
 * @class
 */
class BeforeActivatePistonEvent {
    /**
      * If this is set to true within an event handler, the piston activation is canceled.
      * @name BeforeActivatePistonEvent#cancel
      * @type {boolean}
      */
    /**
      * True if the piston is the process of expanding.
      * @name BeforeActivatePistonEvent#isExpanding
      * @type {boolean}
      */
    /**
      * Contains additional properties and details of the piston.
      * @name BeforeActivatePistonEvent#piston
      * @type {module:Minecraft~BlockPistonComponent}
      */
    

     constructor() {
      /**
        * If this is set to true within an event handler, the piston activation is canceled.
        * 
        * @type {boolean}
        */
      this['cancel'];
      /**
        * True if the piston is the process of expanding.
        * 
        * @type {boolean}
        */
      this['isExpanding'];
      /**
        * Contains additional properties and details of the piston.
        * 
        * @type {module:Minecraft~BlockPistonComponent}
        */
      this['piston'];
    }
  }
  
/** 
 * Manages callbacks that are connected to an event that fires before a piston is activated.
 * @hideconstructor
 * @class
 */
class BeforeActivatePistonEventSignal {
    
/**
  * Adds a callback that will be called before a piston expands or retracts.
  *
  * @method
  * @param {function(module:Minecraft~BeforeActivatePistonEvent):undefined} callback -  
  * @returns {function(module:Minecraft~BeforeActivatePistonEvent):undefined}
  */
subscribe (callback) {
}
/**
  * Removes a callback from being called before a piston expands or retracts.
  *
  * @method
  * @param {function(module:Minecraft~BeforeActivatePistonEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * An event that fires as players enter chat messages.
 * @hideconstructor
 * @class
 */
class BeforeChatEvent {
    /**
      * If set to true in a beforeChat event handler, this message is not broadcast out.
      * @name BeforeChatEvent#cancel
      * @type {boolean}
      */
    /**
      * Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
      * @name BeforeChatEvent#message
      * @type {string}
      */
    /**
      * Player that sent the chat message.
      * @name BeforeChatEvent#sender
      * @type {module:Minecraft~Player}
      */
    /**
      * If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
      * @name BeforeChatEvent#sendToTargets
      * @type {boolean}
      */
    /**
      * List of players that will receive this message.
      * @name BeforeChatEvent#targets
      * @type {Array.<{module:Minecraft~Player}>}
      */
    

     constructor() {
      /**
        * If set to true in a beforeChat event handler, this message is not broadcast out.
        * 
        * @type {boolean}
        */
      this['cancel'];
      /**
        * Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
        * 
        * @type {string}
        */
      this['message'];
      /**
        * Player that sent the chat message.
        * 
        * @type {module:Minecraft~Player}
        */
      this['sender'];
      /**
        * If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
        * 
        * @type {boolean}
        */
      this['sendToTargets'];
      /**
        * List of players that will receive this message.
        * 
        * @type {Array.<{module:Minecraft~Player}>}
        */
      this['targets'];
    }
  }
  
/** 
 * Manages callbacks that are connected to an event that fires before chat messages are sent.
 * @hideconstructor
 * @class
 */
class BeforeChatEventSignal {
    
/**
  * Adds a callback that will be called before new chat messages are sent.
  *
  * @method
  * @param {function(module:Minecraft~BeforeChatEvent):undefined} callback -  
  * @returns {function(module:Minecraft~BeforeChatEvent):undefined}
  */
subscribe (callback) {
}
/**
  * Removes a callback from being called before new chat messages are sent.
  *
  * @method
  * @param {function(module:Minecraft~BeforeChatEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class BeforeExplosionEvent {
    /**
      * @name BeforeExplosionEvent#cancel
      * @type {boolean}
      */
    /**
      * @name BeforeExplosionEvent#dimension
      * @type {module:Minecraft~Dimension}
      */
    /**
      * @name BeforeExplosionEvent#impactedBlocks
      * @type {Array.<{module:Minecraft~BlockLocation}>}
      */
    /**
      * @name BeforeExplosionEvent#source
      * @type {module:Minecraft~Entity}
      */
    

     constructor() {
      /**
        * 
        * @type {boolean}
        */
      this['cancel'];
      /**
        * 
        * @type {module:Minecraft~Dimension}
        */
      this['dimension'];
      /**
        * 
        * @type {Array.<{module:Minecraft~BlockLocation}>}
        */
      this['impactedBlocks'];
      /**
        * 
        * @type {module:Minecraft~Entity}
        */
      this['source'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class BeforeExplosionEventSignal {
    
/**
  *
  * @method
  * @param {function(module:Minecraft~BeforeExplosionEvent):undefined} callback -  
  * @returns {function(module:Minecraft~BeforeExplosionEvent):undefined}
  */
subscribe (callback) {
}
/**
  *
  * @method
  * @param {function(module:Minecraft~BeforeExplosionEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.
 * @hideconstructor
 * @class
 */
class Block {
    /**
      * @name Block#x
      * @type {number}
      */
    /**
      * @name Block#y
      * @type {number}
      */
    /**
      * @name Block#z
      * @type {number}
      */
    
/**
  *
  * @method
  * @returns {boolean}
  */
canBeWaterlogged () {
}
/**
  *
  * @method
  * @returns {module:Minecraft~BlockPermutation}
  * @throws This function can throw errors.
  */
getBlockData () {
}
/**
  *
  * @method
  * @returns {any}
  * @throws This function can throw errors.
  */
getComponent () {
}
/**
  *
  * @method
  * @returns {module:Minecraft~Dimension}
  */
getDimension () {
}
/**
  *
  * @method
  * @returns {module:Minecraft~BlockLocation}
  */
getLocation () {
}
/**
  *
  * @method
  * @returns {Array.<{any}>}
  */
getTags () {
}
/**
  * Checks to see if the permutation of this block has a specific tag.
  *
  * @method
  * @returns {boolean}
  * @example <caption>check_block_tags.js</caption>
  *    import { World, BlockTypes, BlockLocation } from "Minecraft";
  *    
  *    // Fetch the block
  *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
  *    
  *    console.log(`Block is dirt: ${block.hasTag("dirt")}`);
  *    console.log(`Block is wood: ${block.hasTag("wood")}`);
  *    console.log(`Block is stone: ${block.hasTag("stone")}`);
  *    
  */
hasTag () {
}
/**
  *
  * @method
  * @returns {boolean}
  */
isEmpty () {
}
/**
  *
  * @method
  * @returns {boolean}
  */
isWaterlogged () {
}
/**
  * Sets the block in the dimension to the state of the permutation.
  *
  * @method
  * @param {module:Minecraft~BlockPermutation} permutation -  
  * @example <caption>place_bottom_stone_slab.js</caption>
  *    import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";
  *    
  *    // Create the permutation
  *    let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
  *    bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
  *    bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
  *    
  *    // Fetch the block
  *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
  *    
  *    // Set the permutation
  *    block.setPermutation(bottomStoneSlab);
  *    
  */
setPermutation (permutation) {
}
/**
  * Sets the type of block.
  *
  * @method
  */
setType () {
}
/**
  * Sets the waterlogged state of the block.
  *
  * @method
  * @param {boolean} setWaterlogged - If set to true, and if the block can be waterlogged, then the block becomes waterlogged. 
  * @throws This function can throw errors.
  */
setWaterlogged (setWaterlogged) {
}

     constructor() {
      /**
        * 
        * @type {number}
        */
      this['x'];
      /**
        * 
        * @type {number}
        */
      this['y'];
      /**
        * 
        * @type {number}
        */
      this['z'];
    }
  }
  
/** 
 * Base type for components associated with blocks.
 * @hideconstructor
 * @class
 */
class BlockComponent {
    

     constructor() {
    }
  }
  
/** 
 * Represents the inventory of a block in the world. Used with blocks like chests.
 * @hideconstructor
 * @class
 */
class BlockInventoryComponent {
    /**
      * The container which holds an {@link Minecraft.ItemStack}.
      * @name BlockInventoryComponent#container
      * @type {module:Minecraft~BlockInventoryComponentContainer}
      * @throws This function can throw errors.
      */
    /**
      * Coordinates of the specified block.
      * @name BlockInventoryComponent#location
      * @type {module:Minecraft~BlockLocation}
      */
    

     constructor() {
      /**
        * The container which holds an {@link Minecraft.ItemStack}.
        * 
        * @type {module:Minecraft~BlockInventoryComponentContainer}
        */
      this['container'];
      /**
        * Coordinates of the specified block.
        * 
        * @type {module:Minecraft~BlockLocation}
        */
      this['location'];
    }
  }
  
/** 
 * Represents the inventory of a {@link Minecraft.Block} in the world. Used with blocks like chests.
 * @hideconstructor
 * @class
 */
class BlockInventoryComponentContainer {
    /**
      * Contains a count of the slots in the container that are empty.
      * @name BlockInventoryComponentContainer#emptySlotsCount
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
      * @name BlockInventoryComponentContainer#size
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Adds an item to the specified container. Item will be placed in the first available empty slot. (use .setItem if you wish to set items in a particular slot.)
  *
  * @method
  * @param {module:Minecraft~ItemStack} itemStack - The stack of items to add. 
  * @throws This function can throw errors.
  */
addItem (itemStack) {
}
/**
  * Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to retrieve items from. 
  * @returns {module:Minecraft~ItemStack}
  * @throws This function can throw errors.
  * @example <caption>getItem.js</caption>
  *    const itemStack = rightChestContainer.getItem(0);
  *    test.assert(itemStack.id === "apple", "Expected apple");
  *    test.assert(itemStack.amount === 10, "Expected 10 apples");
  *    
  */
getItem (slot) {
}
/**
  * Sets an item stack within a particular slot.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to set an item at. 
  * @param {module:Minecraft~ItemStack} itemStack - Stack of items to place within the specified slot. 
  * @throws This function can throw errors.
  */
setItem (slot, itemStack) {
}
/**
  * Swaps items between two different slots within containers.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to swap from this container. 
  * @param {number} otherSlot - Zero-based index of the slot to swap with. 
  * @param {module:Minecraft~Container} otherContainer - Target container to swap with. Note this can be the same container as this source. 
  * @returns {boolean}
  * @throws This function can throw errors.
  * @example <caption>swapItems.js</caption>
  *    rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
  *    
  */
swapItems (slot, otherSlot, otherContainer) {
}
/**
  * Moves an item from one slot to another, potentially across containers.
  *
  * @method
  * @param {number} fromSlot -  
  * @param {number} toSlot - Zero-based index of the slot to move to. 
  * @param {module:Minecraft~Container} toContainer - Target container to transfer to. Note this can be the same container as the source. 
  * @returns {boolean}
  * @throws This function can throw errors.
  * @example <caption>transferItem.js</caption>
  *    rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
  *    
  */
transferItem (fromSlot, toSlot, toContainer) {
}

     constructor() {
      /**
        * Contains a count of the slots in the container that are empty.
        * 
        * @type {number}
        */
      this['emptySlotsCount'];
      /**
        * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
        * 
        * @type {number}
        */
      this['size'];
    }
  }
  
/** 
 * Contains the integer X, Y, Z coordinates for a block. For decimal locations useful for entities, items, and more, see {@link Minecraft.Location}.
 * @class
 */
class BlockLocation {
    /**
      * The X coordinate.
      * @name BlockLocation#x
      * @type {number}
      */
    /**
      * The integer-based Y position.
      * @name BlockLocation#y
      * @type {number}
      */
    /**
      * The integer-based Z position.
      * @name BlockLocation#z
      * @type {number}
      */
    
/**
  * Returns a BlockLocation for a block above this BlockLocation (that is, y - 1).
  *
  * @method
  * @returns {module:Minecraft~BlockLocation}
  */
above () {
}
/**
  *
  * @method
  * @returns {Array.<{any}>}
  */
blocksBetween () {
}
/**
  *
  * @constructor
  * @param {number} x -  
  * @param {number} y -  
  * @param {number} z -  
  * @returns {module:Minecraft~BlockLocation}
  */
constructor (x, y, z) {
    /**
      * The X coordinate.
      * @type {number}
      */
    this['x'];
    /**
      * The integer-based Y position.
      * @type {number}
      */
    this['y'];
    /**
      * The integer-based Z position.
      * @type {number}
      */
    this['z'];
}
/**
  * Compares this BlockLocation and another BlockLocation to one another.
  *
  * @method
  * @param {module:Minecraft~BlockLocation} other - Other block location to compare this BlockLocation to. 
  * @returns {boolean}
  */
equals (other) {
}
/**
  * Returns a block location using a position relative to this block location
  *
  * @method
  * @param {number} x - X offset relative to this BlockLocation. 
  * @param {number} y - Y offset relative to this BlockLocation. 
  * @param {number} z - Z offset relative to this BlockLocation. 
  * @returns {module:Minecraft~BlockLocation}
  */
offset (x, y, z) {
}

  }
  
/** 
 * Contains the combination of type {@link Minecraft.BlockType} and properties (also sometimes called block state) which describe a block (but does not belong to a specific {@link Minecraft.Block}). This type was introduced as of version 1.17.10.21.
 * @hideconstructor
 * @class
 */
class BlockPermutation {
    
/**
  * Creates a copy of this permutation.
  *
  * @method
  * @returns {module:Minecraft~BlockPermutation}
  */
clone () {
}
/**
  *
  * @method
  * @returns {Array.<{any}>}
  */
getAllProperties () {
}
/**
  * Gets a property for the permutation.
  *
  * @method
  * @param {string} propertyName -  
  * @returns {any}
  * @throws This function can throw errors.
  * @example <caption>place_bottom_stone_slab.js</caption>
  *    import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";
  *    
  *    // Create the permutation
  *    let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
  *    bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
  *    bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
  *    
  *    // Fetch the block
  *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
  *    
  *    // Set the permutation
  *    block.setPermutation(bottomStoneSlab);
  *    
  */
getProperty (propertyName) {
}
/**
  * Creates a copy of the permutation.
  *
  * @method
  * @returns {Array.<{any}>}
  */
getTags () {
}
/**
  *
  * @method
  * @returns {module:Minecraft~BlockType}
  * @throws This function can throw errors.
  */
getType () {
}
/**
  * Checks to see if the permutation has a specific tag.
  *
  * @method
  * @param {string} tag -  
  * @returns {boolean}
  * @example <caption>check_block_tags.js</caption>
  *    import { World, BlockTypes, BlockLocation } from "Minecraft";
  *    
  *    // Fetch the block
  *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
  *    const blockPerm = block.getPermutation();
  *    
  *    console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
  *    console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
  *    console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
  *    
  */
hasTag (tag) {
}

     constructor() {
    }
  }
  
/** 
 * Represents the inventory of a block in the world. Used with blocks like chests.
 * @hideconstructor
 * @class
 */
class BlockPistonComponent {
    /**
      * A set of locations for blocks that are impacted by the activation of this piston.
      * @name BlockPistonComponent#attachedBlocks
      * @type {Array.<{module:Minecraft~BlockLocation}>}
      * @throws This function can throw errors.
      */
    /**
      * Whether the piston is fully expanded.
      * @name BlockPistonComponent#isExpanded
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether the piston is in the process of expanding.
      * @name BlockPistonComponent#isExpanding
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether the piston is in the process of expanding or retracting.
      * @name BlockPistonComponent#isMoving
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether the piston is fully retracted.
      * @name BlockPistonComponent#isRetracted
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether the piston is in the process of retracting.
      * @name BlockPistonComponent#isRetracting
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * @name BlockPistonComponent#location
      * @type {module:Minecraft~BlockLocation}
      */
    

     constructor() {
      /**
        * A set of locations for blocks that are impacted by the activation of this piston.
        * 
        * @type {Array.<{module:Minecraft~BlockLocation}>}
        */
      this['attachedBlocks'];
      /**
        * Whether the piston is fully expanded.
        * 
        * @type {boolean}
        */
      this['isExpanded'];
      /**
        * Whether the piston is in the process of expanding.
        * 
        * @type {boolean}
        */
      this['isExpanding'];
      /**
        * Whether the piston is in the process of expanding or retracting.
        * 
        * @type {boolean}
        */
      this['isMoving'];
      /**
        * Whether the piston is fully retracted.
        * 
        * @type {boolean}
        */
      this['isRetracted'];
      /**
        * Whether the piston is in the process of retracting.
        * 
        * @type {boolean}
        */
      this['isRetracting'];
      /**
        * 
        * @type {module:Minecraft~BlockLocation}
        */
      this['location'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class BlockProperties {
    /**
      * @name BlockProperties#age
      * @type {string}
      */
    /**
      * @name BlockProperties#ageBit
      * @type {string}
      */
    /**
      * @name BlockProperties#allowUnderwaterBit
      * @type {string}
      */
    /**
      * @name BlockProperties#attachedBit
      * @type {string}
      */
    /**
      * @name BlockProperties#attachment
      * @type {string}
      */
    /**
      * @name BlockProperties#bambooLeafSize
      * @type {string}
      */
    /**
      * @name BlockProperties#bambooStalkThickness
      * @type {string}
      */
    /**
      * @name BlockProperties#bigDripleafHead
      * @type {string}
      */
    /**
      * @name BlockProperties#bigDripleafTilt
      * @type {string}
      */
    /**
      * @name BlockProperties#biteCounter
      * @type {string}
      */
    /**
      * @name BlockProperties#blockLightLevel
      * @type {string}
      */
    /**
      * @name BlockProperties#brewingStandSlotABit
      * @type {string}
      */
    /**
      * @name BlockProperties#brewingStandSlotBBit
      * @type {string}
      */
    /**
      * @name BlockProperties#brewingStandSlotCBit
      * @type {string}
      */
    /**
      * @name BlockProperties#buttonPressedBit
      * @type {string}
      */
    /**
      * @name BlockProperties#candles
      * @type {string}
      */
    /**
      * @name BlockProperties#cauldronLiquid
      * @type {string}
      */
    /**
      * @name BlockProperties#chemistryTableType
      * @type {string}
      */
    /**
      * @name BlockProperties#chiselType
      * @type {string}
      */
    /**
      * @name BlockProperties#clusterCount
      * @type {string}
      */
    /**
      * @name BlockProperties#color
      * @type {string}
      */
    /**
      * @name BlockProperties#colorBit
      * @type {string}
      */
    /**
      * @name BlockProperties#composterFillLevel
      * @type {string}
      */
    /**
      * @name BlockProperties#conditionalBit
      * @type {string}
      */
    /**
      * @name BlockProperties#coralColor
      * @type {string}
      */
    /**
      * @name BlockProperties#coralDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#coralFanDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#coralHangTypeBit
      * @type {string}
      */
    /**
      * @name BlockProperties#coveredBit
      * @type {string}
      */
    /**
      * @name BlockProperties#crackedState
      * @type {string}
      */
    /**
      * @name BlockProperties#damage
      * @type {string}
      */
    /**
      * @name BlockProperties#deadBit
      * @type {string}
      */
    /**
      * @name BlockProperties#deprecated
      * @type {string}
      */
    /**
      * @name BlockProperties#direction
      * @type {string}
      */
    /**
      * @name BlockProperties#dirtType
      * @type {string}
      */
    /**
      * @name BlockProperties#disarmedBit
      * @type {string}
      */
    /**
      * @name BlockProperties#doorHingeBit
      * @type {string}
      */
    /**
      * @name BlockProperties#doublePlantType
      * @type {string}
      */
    /**
      * @name BlockProperties#dragDown
      * @type {string}
      */
    /**
      * @name BlockProperties#dripstoneThickness
      * @type {string}
      */
    /**
      * @name BlockProperties#endPortalEyeBit
      * @type {string}
      */
    /**
      * @name BlockProperties#explodeBit
      * @type {string}
      */
    /**
      * @name BlockProperties#extinguished
      * @type {string}
      */
    /**
      * @name BlockProperties#facingDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#fillLevel
      * @type {string}
      */
    /**
      * @name BlockProperties#flowerType
      * @type {string}
      */
    /**
      * @name BlockProperties#groundSignDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#growingPlantAge
      * @type {string}
      */
    /**
      * @name BlockProperties#growth
      * @type {string}
      */
    /**
      * @name BlockProperties#hanging
      * @type {string}
      */
    /**
      * @name BlockProperties#headPieceBit
      * @type {string}
      */
    /**
      * @name BlockProperties#height
      * @type {string}
      */
    /**
      * @name BlockProperties#honeyLevel
      * @type {string}
      */
    /**
      * @name BlockProperties#hugeMushroomBits
      * @type {string}
      */
    /**
      * @name BlockProperties#infiniburnBit
      * @type {string}
      */
    /**
      * @name BlockProperties#inWallBit
      * @type {string}
      */
    /**
      * @name BlockProperties#itemFrameMapBit
      * @type {string}
      */
    /**
      * @name BlockProperties#kelpAge
      * @type {string}
      */
    /**
      * @name BlockProperties#leverDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#liquidDepth
      * @type {string}
      */
    /**
      * @name BlockProperties#lit
      * @type {string}
      */
    /**
      * @name BlockProperties#moisturizedAmount
      * @type {string}
      */
    /**
      * @name BlockProperties#monsterEggStoneType
      * @type {string}
      */
    /**
      * @name BlockProperties#multiFaceDirectionBits
      * @type {string}
      */
    /**
      * @name BlockProperties#newLeafType
      * @type {string}
      */
    /**
      * @name BlockProperties#newLogType
      * @type {string}
      */
    /**
      * @name BlockProperties#noDropBit
      * @type {string}
      */
    /**
      * @name BlockProperties#occupiedBit
      * @type {string}
      */
    /**
      * @name BlockProperties#oldLeafType
      * @type {string}
      */
    /**
      * @name BlockProperties#oldLogType
      * @type {string}
      */
    /**
      * @name BlockProperties#openBit
      * @type {string}
      */
    /**
      * @name BlockProperties#outputLitBit
      * @type {string}
      */
    /**
      * @name BlockProperties#outputSubtractBit
      * @type {string}
      */
    /**
      * @name BlockProperties#persistentBit
      * @type {string}
      */
    /**
      * @name BlockProperties#pillarAxis
      * @type {string}
      */
    /**
      * @name BlockProperties#portalAxis
      * @type {string}
      */
    /**
      * @name BlockProperties#poweredBit
      * @type {string}
      */
    /**
      * @name BlockProperties#prismarineBlockType
      * @type {string}
      */
    /**
      * @name BlockProperties#railDataBit
      * @type {string}
      */
    /**
      * @name BlockProperties#railDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#redstoneSignal
      * @type {string}
      */
    /**
      * @name BlockProperties#repeaterDelay
      * @type {string}
      */
    /**
      * @name BlockProperties#respawnAnchorCharge
      * @type {string}
      */
    /**
      * @name BlockProperties#rotation
      * @type {string}
      */
    /**
      * @name BlockProperties#sandStoneType
      * @type {string}
      */
    /**
      * @name BlockProperties#sandType
      * @type {string}
      */
    /**
      * @name BlockProperties#saplingType
      * @type {string}
      */
    /**
      * @name BlockProperties#seaGrassType
      * @type {string}
      */
    /**
      * @name BlockProperties#spongeType
      * @type {string}
      */
    /**
      * @name BlockProperties#stability
      * @type {string}
      */
    /**
      * @name BlockProperties#stabilityCheck
      * @type {string}
      */
    /**
      * @name BlockProperties#stoneBrickType
      * @type {string}
      */
    /**
      * @name BlockProperties#stoneSlabType
      * @type {string}
      */
    /**
      * @name BlockProperties#stoneSlabType2
      * @type {string}
      */
    /**
      * @name BlockProperties#stoneSlabType3
      * @type {string}
      */
    /**
      * @name BlockProperties#stoneSlabType4
      * @type {string}
      */
    /**
      * @name BlockProperties#stoneType
      * @type {string}
      */
    /**
      * @name BlockProperties#strippedBit
      * @type {string}
      */
    /**
      * @name BlockProperties#structureBlockType
      * @type {string}
      */
    /**
      * @name BlockProperties#structureVoidType
      * @type {string}
      */
    /**
      * @name BlockProperties#suspendedBit
      * @type {string}
      */
    /**
      * @name BlockProperties#tallGrassType
      * @type {string}
      */
    /**
      * @name BlockProperties#toggleBit
      * @type {string}
      */
    /**
      * @name BlockProperties#topSlotBit
      * @type {string}
      */
    /**
      * @name BlockProperties#torchFacingDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#triggeredBit
      * @type {string}
      */
    /**
      * @name BlockProperties#turtleEggCount
      * @type {string}
      */
    /**
      * @name BlockProperties#twistingVinesAge
      * @type {string}
      */
    /**
      * @name BlockProperties#updateBit
      * @type {string}
      */
    /**
      * @name BlockProperties#upperBlockBit
      * @type {string}
      */
    /**
      * @name BlockProperties#upsideDownBit
      * @type {string}
      */
    /**
      * @name BlockProperties#vineDirectionBits
      * @type {string}
      */
    /**
      * @name BlockProperties#wallBlockType
      * @type {string}
      */
    /**
      * @name BlockProperties#wallConnectionTypeEast
      * @type {string}
      */
    /**
      * @name BlockProperties#wallConnectionTypeNorth
      * @type {string}
      */
    /**
      * @name BlockProperties#wallConnectionTypeSouth
      * @type {string}
      */
    /**
      * @name BlockProperties#wallConnectionTypeWest
      * @type {string}
      */
    /**
      * @name BlockProperties#wallPostBit
      * @type {string}
      */
    /**
      * @name BlockProperties#weepingVinesAge
      * @type {string}
      */
    /**
      * @name BlockProperties#weirdoDirection
      * @type {string}
      */
    /**
      * @name BlockProperties#woodType
      * @type {string}
      */
    

     constructor() {
      /**
        * 
        * @type {string}
        */
      this['age'];
      /**
        * 
        * @type {string}
        */
      this['ageBit'];
      /**
        * 
        * @type {string}
        */
      this['allowUnderwaterBit'];
      /**
        * 
        * @type {string}
        */
      this['attachedBit'];
      /**
        * 
        * @type {string}
        */
      this['attachment'];
      /**
        * 
        * @type {string}
        */
      this['bambooLeafSize'];
      /**
        * 
        * @type {string}
        */
      this['bambooStalkThickness'];
      /**
        * 
        * @type {string}
        */
      this['bigDripleafHead'];
      /**
        * 
        * @type {string}
        */
      this['bigDripleafTilt'];
      /**
        * 
        * @type {string}
        */
      this['biteCounter'];
      /**
        * 
        * @type {string}
        */
      this['blockLightLevel'];
      /**
        * 
        * @type {string}
        */
      this['brewingStandSlotABit'];
      /**
        * 
        * @type {string}
        */
      this['brewingStandSlotBBit'];
      /**
        * 
        * @type {string}
        */
      this['brewingStandSlotCBit'];
      /**
        * 
        * @type {string}
        */
      this['buttonPressedBit'];
      /**
        * 
        * @type {string}
        */
      this['candles'];
      /**
        * 
        * @type {string}
        */
      this['cauldronLiquid'];
      /**
        * 
        * @type {string}
        */
      this['chemistryTableType'];
      /**
        * 
        * @type {string}
        */
      this['chiselType'];
      /**
        * 
        * @type {string}
        */
      this['clusterCount'];
      /**
        * 
        * @type {string}
        */
      this['color'];
      /**
        * 
        * @type {string}
        */
      this['colorBit'];
      /**
        * 
        * @type {string}
        */
      this['composterFillLevel'];
      /**
        * 
        * @type {string}
        */
      this['conditionalBit'];
      /**
        * 
        * @type {string}
        */
      this['coralColor'];
      /**
        * 
        * @type {string}
        */
      this['coralDirection'];
      /**
        * 
        * @type {string}
        */
      this['coralFanDirection'];
      /**
        * 
        * @type {string}
        */
      this['coralHangTypeBit'];
      /**
        * 
        * @type {string}
        */
      this['coveredBit'];
      /**
        * 
        * @type {string}
        */
      this['crackedState'];
      /**
        * 
        * @type {string}
        */
      this['damage'];
      /**
        * 
        * @type {string}
        */
      this['deadBit'];
      /**
        * 
        * @type {string}
        */
      this['deprecated'];
      /**
        * 
        * @type {string}
        */
      this['direction'];
      /**
        * 
        * @type {string}
        */
      this['dirtType'];
      /**
        * 
        * @type {string}
        */
      this['disarmedBit'];
      /**
        * 
        * @type {string}
        */
      this['doorHingeBit'];
      /**
        * 
        * @type {string}
        */
      this['doublePlantType'];
      /**
        * 
        * @type {string}
        */
      this['dragDown'];
      /**
        * 
        * @type {string}
        */
      this['dripstoneThickness'];
      /**
        * 
        * @type {string}
        */
      this['endPortalEyeBit'];
      /**
        * 
        * @type {string}
        */
      this['explodeBit'];
      /**
        * 
        * @type {string}
        */
      this['extinguished'];
      /**
        * 
        * @type {string}
        */
      this['facingDirection'];
      /**
        * 
        * @type {string}
        */
      this['fillLevel'];
      /**
        * 
        * @type {string}
        */
      this['flowerType'];
      /**
        * 
        * @type {string}
        */
      this['groundSignDirection'];
      /**
        * 
        * @type {string}
        */
      this['growingPlantAge'];
      /**
        * 
        * @type {string}
        */
      this['growth'];
      /**
        * 
        * @type {string}
        */
      this['hanging'];
      /**
        * 
        * @type {string}
        */
      this['headPieceBit'];
      /**
        * 
        * @type {string}
        */
      this['height'];
      /**
        * 
        * @type {string}
        */
      this['honeyLevel'];
      /**
        * 
        * @type {string}
        */
      this['hugeMushroomBits'];
      /**
        * 
        * @type {string}
        */
      this['infiniburnBit'];
      /**
        * 
        * @type {string}
        */
      this['inWallBit'];
      /**
        * 
        * @type {string}
        */
      this['itemFrameMapBit'];
      /**
        * 
        * @type {string}
        */
      this['kelpAge'];
      /**
        * 
        * @type {string}
        */
      this['leverDirection'];
      /**
        * 
        * @type {string}
        */
      this['liquidDepth'];
      /**
        * 
        * @type {string}
        */
      this['lit'];
      /**
        * 
        * @type {string}
        */
      this['moisturizedAmount'];
      /**
        * 
        * @type {string}
        */
      this['monsterEggStoneType'];
      /**
        * 
        * @type {string}
        */
      this['multiFaceDirectionBits'];
      /**
        * 
        * @type {string}
        */
      this['newLeafType'];
      /**
        * 
        * @type {string}
        */
      this['newLogType'];
      /**
        * 
        * @type {string}
        */
      this['noDropBit'];
      /**
        * 
        * @type {string}
        */
      this['occupiedBit'];
      /**
        * 
        * @type {string}
        */
      this['oldLeafType'];
      /**
        * 
        * @type {string}
        */
      this['oldLogType'];
      /**
        * 
        * @type {string}
        */
      this['openBit'];
      /**
        * 
        * @type {string}
        */
      this['outputLitBit'];
      /**
        * 
        * @type {string}
        */
      this['outputSubtractBit'];
      /**
        * 
        * @type {string}
        */
      this['persistentBit'];
      /**
        * 
        * @type {string}
        */
      this['pillarAxis'];
      /**
        * 
        * @type {string}
        */
      this['portalAxis'];
      /**
        * 
        * @type {string}
        */
      this['poweredBit'];
      /**
        * 
        * @type {string}
        */
      this['prismarineBlockType'];
      /**
        * 
        * @type {string}
        */
      this['railDataBit'];
      /**
        * 
        * @type {string}
        */
      this['railDirection'];
      /**
        * 
        * @type {string}
        */
      this['redstoneSignal'];
      /**
        * 
        * @type {string}
        */
      this['repeaterDelay'];
      /**
        * 
        * @type {string}
        */
      this['respawnAnchorCharge'];
      /**
        * 
        * @type {string}
        */
      this['rotation'];
      /**
        * 
        * @type {string}
        */
      this['sandStoneType'];
      /**
        * 
        * @type {string}
        */
      this['sandType'];
      /**
        * 
        * @type {string}
        */
      this['saplingType'];
      /**
        * 
        * @type {string}
        */
      this['seaGrassType'];
      /**
        * 
        * @type {string}
        */
      this['spongeType'];
      /**
        * 
        * @type {string}
        */
      this['stability'];
      /**
        * 
        * @type {string}
        */
      this['stabilityCheck'];
      /**
        * 
        * @type {string}
        */
      this['stoneBrickType'];
      /**
        * 
        * @type {string}
        */
      this['stoneSlabType'];
      /**
        * 
        * @type {string}
        */
      this['stoneSlabType2'];
      /**
        * 
        * @type {string}
        */
      this['stoneSlabType3'];
      /**
        * 
        * @type {string}
        */
      this['stoneSlabType4'];
      /**
        * 
        * @type {string}
        */
      this['stoneType'];
      /**
        * 
        * @type {string}
        */
      this['strippedBit'];
      /**
        * 
        * @type {string}
        */
      this['structureBlockType'];
      /**
        * 
        * @type {string}
        */
      this['structureVoidType'];
      /**
        * 
        * @type {string}
        */
      this['suspendedBit'];
      /**
        * 
        * @type {string}
        */
      this['tallGrassType'];
      /**
        * 
        * @type {string}
        */
      this['toggleBit'];
      /**
        * 
        * @type {string}
        */
      this['topSlotBit'];
      /**
        * 
        * @type {string}
        */
      this['torchFacingDirection'];
      /**
        * 
        * @type {string}
        */
      this['triggeredBit'];
      /**
        * 
        * @type {string}
        */
      this['turtleEggCount'];
      /**
        * 
        * @type {string}
        */
      this['twistingVinesAge'];
      /**
        * 
        * @type {string}
        */
      this['updateBit'];
      /**
        * 
        * @type {string}
        */
      this['upperBlockBit'];
      /**
        * 
        * @type {string}
        */
      this['upsideDownBit'];
      /**
        * 
        * @type {string}
        */
      this['vineDirectionBits'];
      /**
        * 
        * @type {string}
        */
      this['wallBlockType'];
      /**
        * 
        * @type {string}
        */
      this['wallConnectionTypeEast'];
      /**
        * 
        * @type {string}
        */
      this['wallConnectionTypeNorth'];
      /**
        * 
        * @type {string}
        */
      this['wallConnectionTypeSouth'];
      /**
        * 
        * @type {string}
        */
      this['wallConnectionTypeWest'];
      /**
        * 
        * @type {string}
        */
      this['wallPostBit'];
      /**
        * 
        * @type {string}
        */
      this['weepingVinesAge'];
      /**
        * 
        * @type {string}
        */
      this['weirdoDirection'];
      /**
        * 
        * @type {string}
        */
      this['woodType'];
    }
  }
  
/** 
 * The type (or template) of a block. Does not contain permutation data (state) other than the type of block it represents. This type was introduced as of version 1.17.10.21.
 * @hideconstructor
 * @class
 */
class BlockType {
    
/**
  *
  * @method
  * @returns {boolean}
  */
canBeWaterlogged () {
}
/**
  * Creates the default {@link Minecraft.BlockPermutation} for this type which uses the default values for all properties.
  *
  * @method
  * @returns {module:Minecraft~BlockPermutation}
  * @throws This function can throw errors.
  * @example <caption>place_bottom_stone_slab.js</caption>
  *    import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";
  *    
  *    // Create the permutation
  *    let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
  *    bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
  *    bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
  *    
  *    // Fetch the block
  *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
  *    
  *    // Set the permutation
  *    block.setPermutation(bottomStoneSlab);
  *    
  */
createDefaultBlockPermutation () {
}
/**
  * Name of the block type.
  *
  * @method
  * @returns {string}
  */
getName () {
}

     constructor() {
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class BlockTypes {
    /**
      * @name BlockTypes#acaciaButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#acaciaDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#acaciaFenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#acaciaPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#acaciaStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#acaciaStandingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#acaciaTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#acaciaWallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#activatorRail
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#air
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#allow
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#amethystBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#amethystCluster
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ancientDebris
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#andesiteStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#anvil
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#azalea
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#azaleaLeaves
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#azaleaLeavesFlowered
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bamboo
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bambooSapling
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#barrel
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#barrier
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#basalt
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#beacon
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bed
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bedrock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#beehive
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#beeNest
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#beetroot
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bell
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bigDripleaf
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchFenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchStandingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#birchWallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackstoneDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackstoneSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackstoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blackstoneWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blastFurnace
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blueCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blueCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blueGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#blueIce
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#boneBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bookshelf
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#borderBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brewingStand
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brickBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brownCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brownCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brownGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brownMushroom
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#brownMushroomBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#bubbleColumn
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#buddingAmethyst
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cactus
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#calcite
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#camera
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#campfire
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#candle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#candleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#carpet
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#carrots
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cartographyTable
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#carvedPumpkin
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cauldron
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#caveVines
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#caveVinesBodyWithBerries
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#caveVinesHeadWithBerries
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chain
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chainCommandBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chemicalHeat
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chemistryTable
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chest
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chiseledDeepslate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chiseledNetherBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chiseledPolishedBlackstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chorusFlower
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#chorusPlant
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#clay
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coalBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coalOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cobbledDeepslate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cobbledDeepslateDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cobbledDeepslateSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cobbledDeepslateStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cobbledDeepslateWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cobblestone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cobblestoneWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cocoa
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coloredTorchBp
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coloredTorchRg
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#commandBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#composter
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#concrete
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#concretepowder
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#conduit
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#copperBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#copperOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coral
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coralBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coralFan
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coralFanDead
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coralFanHang
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coralFanHang2
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#coralFanHang3
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crackedDeepslateBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crackedDeepslateTiles
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crackedNetherBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crackedPolishedBlackstoneBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#craftingTable
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonFence
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonFenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonFungus
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonHyphae
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonNylium
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonPlanks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonRoots
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonStandingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonStem
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#crimsonWallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cryingObsidian
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cyanCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cyanCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#cyanGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkOakButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkOakDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkOakFenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkOakPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkOakStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkoakStandingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkOakTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkoakWallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#darkPrismarineStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#daylightDetector
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#daylightDetectorInverted
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deadbush
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateBrickDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateBrickSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateBrickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateBrickWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateCoalOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateCopperOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateDiamondOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateEmeraldOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateGoldOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateIronOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateLapisOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateRedstoneOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateTileDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateTiles
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateTileSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateTileStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deepslateTileWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#deny
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#detectorRail
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#diamondBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#diamondOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#dioriteStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#dirt
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#dirtWithRoots
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#dispenser
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#doubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#doublePlant
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#doubleStoneSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#doubleStoneSlab2
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#doubleStoneSlab3
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#doubleStoneSlab4
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#doubleWoodenSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#dragonEgg
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#driedKelpBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#dripstoneBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#dropper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element0
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element1
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element10
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element100
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element101
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element102
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element103
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element104
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element105
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element106
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element107
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element108
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element109
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element11
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element110
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element111
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element112
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element113
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element114
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element115
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element116
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element117
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element118
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element12
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element13
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element14
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element15
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element16
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element17
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element18
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element19
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element2
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element20
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element21
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element22
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element23
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element24
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element25
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element26
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element27
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element28
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element29
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element3
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element30
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element31
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element32
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element33
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element34
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element35
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element36
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element37
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element38
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element39
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element4
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element40
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element41
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element42
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element43
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element44
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element45
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element46
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element47
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element48
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element49
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element5
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element50
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element51
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element52
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element53
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element54
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element55
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element56
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element57
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element58
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element59
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element6
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element60
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element61
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element62
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element63
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element64
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element65
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element66
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element67
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element68
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element69
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element7
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element70
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element71
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element72
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element73
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element74
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element75
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element76
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element77
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element78
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element79
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element8
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element80
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element81
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element82
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element83
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element84
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element85
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element86
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element87
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element88
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element89
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element9
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element90
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element91
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element92
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element93
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element94
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element95
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element96
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element97
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element98
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#element99
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#emeraldBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#emeraldOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#enchantingTable
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#endBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#endBrickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#enderChest
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#endGateway
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#endPortal
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#endPortalFrame
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#endRod
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#endStone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#exposedCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#exposedCutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#exposedCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#exposedCutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#exposedDoubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#farmland
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#fence
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#fenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#fire
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#fletchingTable
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#floweringAzalea
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#flowerPot
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#flowingLava
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#flowingWater
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#frame
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#frostedIce
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#furnace
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#gildedBlackstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#glass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#glassPane
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#glowFrame
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#glowingobsidian
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#glowLichen
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#glowstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#goldBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#goldenRail
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#goldOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#graniteStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#grass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#grassPath
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#gravel
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#grayCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#grayCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#grayGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#greenCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#greenCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#greenGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#grindstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hangingRoots
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hardenedClay
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hardGlass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hardGlassPane
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hardStainedGlass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hardStainedGlassPane
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hayBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#heavyWeightedPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#honeyBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#honeycombBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#hopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ice
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#infestedDeepslate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#infoUpdate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#infoUpdate2
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#invisiblebedrock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ironBars
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ironBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ironDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ironOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ironTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jigsaw
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jukebox
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jungleButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jungleDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jungleFenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#junglePressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jungleStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jungleStandingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jungleTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#jungleWallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#kelp
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#ladder
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lantern
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lapisBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lapisOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#largeAmethystBud
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lava
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lavaCauldron
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#leaves
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#leaves2
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lectern
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lever
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightBlueCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightBlueCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightBlueGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightGrayCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightGrayCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightningRod
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lightWeightedPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#limeCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#limeCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#limeGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#litBlastFurnace
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#litDeepslateRedstoneOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#litFurnace
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#litPumpkin
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#litRedstoneLamp
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#litRedstoneOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#litSmoker
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#lodestone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#log
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#log2
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#loom
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#magentaCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#magentaCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#magentaGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#magma
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mediumAmethystBud
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#melonBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#melonStem
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mobSpawner
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#monsterEgg
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mossBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mossCarpet
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mossyCobblestone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mossyCobblestoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mossyStoneBrickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#movingblock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#mycelium
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherBrick
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherBrickFence
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherBrickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherGoldOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netheriteBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherrack
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherreactor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherSprouts
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherWart
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#netherWartBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#normalStoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#noteblock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#oakStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#observer
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#obsidian
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#orangeCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#orangeCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#orangeGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#oxidizedCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#oxidizedCutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#oxidizedCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#oxidizedCutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#oxidizedDoubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#packedIce
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#pinkCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#pinkCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#pinkGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#piston
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#pistonarmcollision
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#planks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#podzol
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#pointedDripstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedAndesiteStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBasalt
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneBrickDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneBrickSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneBrickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneBrickWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstonePressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedBlackstoneWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedDeepslate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedDeepslateDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedDeepslateSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedDeepslateStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedDeepslateWall
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedDioriteStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#polishedGraniteStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#portal
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#potatoes
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#powderSnow
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#poweredComparator
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#poweredRepeater
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#prismarine
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#prismarineBricksStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#prismarineStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#pumpkin
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#pumpkinStem
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#purpleCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#purpleCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#purpleGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#purpurBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#purpurStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#quartzBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#quartzBricks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#quartzOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#quartzStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#rail
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#rawCopperBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#rawGoldBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#rawIronBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redFlower
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redMushroom
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redMushroomBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redNetherBrick
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redNetherBrickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redSandstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redSandstoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redstoneBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redstoneLamp
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redstoneOre
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redstoneTorch
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#redstoneWire
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#reeds
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#repeatingCommandBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#reserved6
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#respawnAnchor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sand
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sandstone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sandstoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sapling
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#scaffolding
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sculkSensor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#seagrass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sealantern
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#seaPickle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#shroomlight
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#shulkerBox
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#silverGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#skull
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#slime
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smallAmethystBud
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smallDripleafBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smithingTable
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smoker
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smoothBasalt
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smoothQuartzStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smoothRedSandstoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smoothSandstoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#smoothStone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#snow
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#snowLayer
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#soulCampfire
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#soulFire
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#soulLantern
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#soulSand
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#soulSoil
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#soulTorch
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sponge
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sporeBlossom
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#spruceButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#spruceDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#spruceFenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sprucePressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#spruceStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#spruceStandingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#spruceTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#spruceWallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stainedGlass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stainedGlassPane
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stainedHardenedClay
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#standingBanner
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#standingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stickyPiston
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stickypistonarmcollision
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stone
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stonebrick
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stoneBrickStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stoneButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stonecutter
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stonecutterBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stonePressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stoneSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stoneSlab2
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stoneSlab3
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stoneSlab4
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#stoneStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedAcaciaLog
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedBirchLog
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedCrimsonHyphae
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedCrimsonStem
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedDarkOakLog
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedJungleLog
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedOakLog
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedSpruceLog
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedWarpedHyphae
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#strippedWarpedStem
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#structureBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#structureVoid
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#sweetBerryBush
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#tallgrass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#target
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#tintedGlass
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#tnt
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#torch
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#trapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#trappedChest
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#tripwire
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#tripwireHook
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#tuff
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#turtleEgg
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#twistingVines
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#underwaterTorch
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#undyedShulkerBox
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#unknown
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#unlitRedstoneTorch
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#unpoweredComparator
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#unpoweredRepeater
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#vine
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#wallBanner
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#wallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedDoubleSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedFence
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedFenceGate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedFungus
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedHyphae
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedNylium
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedPlanks
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedRoots
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedStandingSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedStem
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedTrapdoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedWallSign
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#warpedWartBlock
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#water
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waterlily
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedCutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedCutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedDoubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedExposedCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedExposedCutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedExposedCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedExposedCutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedExposedDoubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedOxidizedCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedOxidizedCutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedOxidizedCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedOxidizedCutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedOxidizedDoubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedWeatheredCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedWeatheredCutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedWeatheredCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedWeatheredCutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#waxedWeatheredDoubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#weatheredCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#weatheredCutCopper
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#weatheredCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#weatheredCutCopperStairs
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#weatheredDoubleCutCopperSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#web
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#weepingVines
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#wheat
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#whiteCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#whiteCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#whiteGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#witherRose
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#wood
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#woodenButton
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#woodenDoor
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#woodenPressurePlate
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#woodenSlab
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#wool
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#yellowCandle
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#yellowCandleCake
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#yellowFlower
      * @type {module:Minecraft~BlockType}
      */
    /**
      * @name BlockTypes#yellowGlazedTerracotta
      * @type {module:Minecraft~BlockType}
      */
    
/**
  *
  * @method
  * @param {string} typeName -  
  * @returns {module:Minecraft~BlockType}
  */
get (typeName) {
}
/**
  *
  * @method
  * @returns {Array.<{module:Minecraft~BlockType}>}
  */
getAllBlockTypes () {
}

     constructor() {
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaFenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaStandingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['acaciaWallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['activatorRail'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['air'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['allow'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['amethystBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['amethystCluster'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ancientDebris'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['andesiteStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['anvil'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['azalea'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['azaleaLeaves'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['azaleaLeavesFlowered'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bamboo'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bambooSapling'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['barrel'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['barrier'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['basalt'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['beacon'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bed'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bedrock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['beehive'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['beeNest'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['beetroot'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bell'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bigDripleaf'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchFenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchStandingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['birchWallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackstoneDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackstoneSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blackstoneWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blastFurnace'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blueCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blueCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blueGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['blueIce'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['boneBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bookshelf'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['borderBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brewingStand'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brickBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brownCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brownCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brownGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brownMushroom'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['brownMushroomBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['bubbleColumn'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['buddingAmethyst'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cactus'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['calcite'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['camera'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['campfire'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['candle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['candleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['carpet'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['carrots'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cartographyTable'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['carvedPumpkin'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cauldron'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['caveVines'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['caveVinesBodyWithBerries'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['caveVinesHeadWithBerries'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chain'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chainCommandBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chemicalHeat'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chemistryTable'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chest'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chiseledDeepslate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chiseledNetherBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chiseledPolishedBlackstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chorusFlower'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['chorusPlant'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['clay'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coalBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coalOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cobbledDeepslate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cobbledDeepslateDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cobbledDeepslateSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cobbledDeepslateStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cobbledDeepslateWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cobblestone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cobblestoneWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cocoa'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coloredTorchBp'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coloredTorchRg'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['commandBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['composter'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['concrete'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['concretepowder'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['conduit'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['copperBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['copperOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coral'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coralBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coralFan'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coralFanDead'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coralFanHang'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coralFanHang2'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['coralFanHang3'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crackedDeepslateBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crackedDeepslateTiles'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crackedNetherBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crackedPolishedBlackstoneBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['craftingTable'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonFence'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonFenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonFungus'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonHyphae'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonNylium'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonPlanks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonRoots'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonStandingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonStem'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['crimsonWallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cryingObsidian'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cyanCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cyanCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['cyanGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkOakButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkOakDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkOakFenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkOakPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkOakStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkoakStandingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkOakTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkoakWallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['darkPrismarineStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['daylightDetector'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['daylightDetectorInverted'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deadbush'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateBrickDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateBrickSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateBrickWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateCoalOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateCopperOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateDiamondOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateEmeraldOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateGoldOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateIronOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateLapisOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateRedstoneOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateTileDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateTiles'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateTileSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateTileStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deepslateTileWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['deny'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['detectorRail'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['diamondBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['diamondOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['dioriteStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['dirt'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['dirtWithRoots'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['dispenser'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['doubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['doublePlant'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['doubleStoneSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['doubleStoneSlab2'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['doubleStoneSlab3'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['doubleStoneSlab4'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['doubleWoodenSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['dragonEgg'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['driedKelpBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['dripstoneBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['dropper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element0'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element1'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element10'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element100'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element101'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element102'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element103'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element104'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element105'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element106'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element107'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element108'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element109'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element11'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element110'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element111'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element112'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element113'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element114'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element115'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element116'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element117'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element118'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element12'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element13'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element14'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element15'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element16'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element17'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element18'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element19'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element2'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element20'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element21'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element22'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element23'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element24'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element25'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element26'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element27'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element28'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element29'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element3'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element30'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element31'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element32'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element33'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element34'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element35'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element36'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element37'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element38'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element39'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element4'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element40'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element41'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element42'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element43'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element44'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element45'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element46'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element47'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element48'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element49'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element5'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element50'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element51'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element52'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element53'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element54'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element55'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element56'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element57'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element58'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element59'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element6'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element60'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element61'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element62'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element63'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element64'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element65'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element66'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element67'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element68'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element69'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element7'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element70'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element71'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element72'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element73'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element74'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element75'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element76'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element77'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element78'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element79'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element8'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element80'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element81'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element82'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element83'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element84'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element85'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element86'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element87'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element88'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element89'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element9'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element90'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element91'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element92'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element93'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element94'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element95'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element96'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element97'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element98'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['element99'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['emeraldBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['emeraldOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['enchantingTable'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['endBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['endBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['enderChest'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['endGateway'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['endPortal'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['endPortalFrame'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['endRod'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['endStone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['exposedCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['exposedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['exposedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['exposedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['exposedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['farmland'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['fence'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['fenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['fire'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['fletchingTable'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['floweringAzalea'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['flowerPot'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['flowingLava'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['flowingWater'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['frame'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['frostedIce'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['furnace'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['gildedBlackstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['glass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['glassPane'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['glowFrame'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['glowingobsidian'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['glowLichen'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['glowstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['goldBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['goldenRail'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['goldOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['graniteStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['grass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['grassPath'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['gravel'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['grayCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['grayCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['grayGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['greenCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['greenCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['greenGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['grindstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hangingRoots'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hardenedClay'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hardGlass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hardGlassPane'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hardStainedGlass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hardStainedGlassPane'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hayBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['heavyWeightedPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['honeyBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['honeycombBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['hopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ice'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['infestedDeepslate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['infoUpdate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['infoUpdate2'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['invisiblebedrock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ironBars'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ironBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ironDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ironOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ironTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jigsaw'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jukebox'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jungleButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jungleDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jungleFenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['junglePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jungleStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jungleStandingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jungleTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['jungleWallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['kelp'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['ladder'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lantern'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lapisBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lapisOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['largeAmethystBud'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lava'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lavaCauldron'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['leaves'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['leaves2'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lectern'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lever'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightBlueCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightBlueCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightBlueGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightGrayCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightGrayCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightningRod'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lightWeightedPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['limeCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['limeCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['limeGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['litBlastFurnace'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['litDeepslateRedstoneOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['litFurnace'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['litPumpkin'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['litRedstoneLamp'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['litRedstoneOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['litSmoker'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['lodestone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['log'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['log2'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['loom'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['magentaCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['magentaCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['magentaGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['magma'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mediumAmethystBud'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['melonBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['melonStem'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mobSpawner'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['monsterEgg'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mossBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mossCarpet'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mossyCobblestone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mossyCobblestoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mossyStoneBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['movingblock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['mycelium'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherBrick'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherBrickFence'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherGoldOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netheriteBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherrack'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherreactor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherSprouts'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherWart'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['netherWartBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['normalStoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['noteblock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['oakStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['observer'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['obsidian'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['orangeCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['orangeCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['orangeGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['oxidizedCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['oxidizedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['oxidizedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['oxidizedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['oxidizedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['packedIce'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['pinkCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['pinkCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['pinkGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['piston'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['pistonarmcollision'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['planks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['podzol'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['pointedDripstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedAndesiteStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBasalt'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneBrickDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneBrickSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneBrickWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstonePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedBlackstoneWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedDeepslate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedDeepslateDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedDeepslateSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedDeepslateStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedDeepslateWall'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedDioriteStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['polishedGraniteStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['portal'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['potatoes'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['powderSnow'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['poweredComparator'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['poweredRepeater'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['prismarine'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['prismarineBricksStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['prismarineStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['pumpkin'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['pumpkinStem'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['purpleCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['purpleCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['purpleGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['purpurBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['purpurStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['quartzBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['quartzBricks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['quartzOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['quartzStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['rail'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['rawCopperBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['rawGoldBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['rawIronBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redFlower'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redMushroom'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redMushroomBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redNetherBrick'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redNetherBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redSandstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redSandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redstoneBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redstoneLamp'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redstoneOre'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redstoneTorch'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['redstoneWire'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['reeds'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['repeatingCommandBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['reserved6'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['respawnAnchor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sand'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sandstone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sapling'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['scaffolding'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sculkSensor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['seagrass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sealantern'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['seaPickle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['shroomlight'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['shulkerBox'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['silverGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['skull'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['slime'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smallAmethystBud'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smallDripleafBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smithingTable'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smoker'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smoothBasalt'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smoothQuartzStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smoothRedSandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smoothSandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['smoothStone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['snow'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['snowLayer'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['soulCampfire'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['soulFire'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['soulLantern'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['soulSand'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['soulSoil'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['soulTorch'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sponge'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sporeBlossom'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['spruceButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['spruceDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['spruceFenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sprucePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['spruceStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['spruceStandingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['spruceTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['spruceWallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stainedGlass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stainedGlassPane'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stainedHardenedClay'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['standingBanner'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['standingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stickyPiston'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stickypistonarmcollision'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stone'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stonebrick'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stoneBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stoneButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stonecutter'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stonecutterBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stonePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stoneSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stoneSlab2'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stoneSlab3'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stoneSlab4'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['stoneStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedAcaciaLog'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedBirchLog'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedCrimsonHyphae'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedCrimsonStem'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedDarkOakLog'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedJungleLog'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedOakLog'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedSpruceLog'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedWarpedHyphae'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['strippedWarpedStem'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['structureBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['structureVoid'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['sweetBerryBush'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['tallgrass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['target'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['tintedGlass'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['tnt'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['torch'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['trapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['trappedChest'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['tripwire'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['tripwireHook'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['tuff'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['turtleEgg'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['twistingVines'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['underwaterTorch'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['undyedShulkerBox'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['unknown'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['unlitRedstoneTorch'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['unpoweredComparator'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['unpoweredRepeater'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['vine'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['wallBanner'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['wallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedFence'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedFenceGate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedFungus'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedHyphae'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedNylium'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedPlanks'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedRoots'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedStandingSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedStem'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedWallSign'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['warpedWartBlock'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['water'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waterlily'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedExposedCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedExposedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedExposedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedExposedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedExposedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedOxidizedCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedOxidizedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedOxidizedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedOxidizedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedOxidizedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedWeatheredCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedWeatheredCutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedWeatheredCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedWeatheredCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['waxedWeatheredDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['weatheredCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['weatheredCutCopper'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['weatheredCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['weatheredCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['weatheredDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['web'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['weepingVines'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['wheat'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['whiteCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['whiteCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['whiteGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['witherRose'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['wood'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['woodenButton'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['woodenDoor'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['woodenPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['woodenSlab'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['wool'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['yellowCandle'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['yellowCandleCake'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['yellowFlower'];
      /**
        * 
        * @type {module:Minecraft~BlockType}
        */
      this['yellowGlazedTerracotta'];
    }
  }
  
/** 
 * Contains the state of a boolean-based property for a {@link Minecraft.BlockPermutation}.
 * @hideconstructor
 * @class
 */
class BoolBlockProperty {
    /**
      * @name BoolBlockProperty#name
      * @type {string}
      */
    /**
      * @name BoolBlockProperty#validValues
      * @type {Array.<{boolean}>}
      */
    /**
      * The current value of this property.
      * @name BoolBlockProperty#value
      * @type {boolean}
      */
    

     constructor() {
      /**
        * 
        * @type {string}
        */
      this['name'];
      /**
        * 
        * @type {Array.<{boolean}>}
        */
      this['validValues'];
      /**
        * The current value of this property.
        * 
        * @type {boolean}
        */
      this['value'];
    }
  }
  
/** 
 * Defines what blocks this entity can breathe in and gives them the ability to suffocate.
 * @hideconstructor
 * @class
 */
class Breathable {
    /**
      * List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.
      * @name Breathable#breatheBlocks
      * @type {Array.<{module:Minecraft~BlockPermutation}>}
      * @throws This function can throw errors.
      */
    /**
      * If true, this entity can breathe in air.
      * @name Breathable#breathesAir
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * If true, this entity can breathe in lava.
      * @name Breathable#breathesLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * If true, this entity can breathe in solid blocks.
      * @name Breathable#breathesSolids
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * If true, this entity can breathe in water.
      * @name Breathable#breathesWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * If true, this entity will have visible bubbles while in water.
      * @name Breathable#generatesBubbles
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:breathable.
      * @name Breathable#id
      * @type {string}
      */
    /**
      * Time in seconds to recover breath to maximum.
      * @name Breathable#inhaleTime
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * List of blocks this entity can't breathe in.
      * @name Breathable#nonBreatheBlocks
      * @type {Array.<{module:Minecraft~BlockPermutation}>}
      * @throws This function can throw errors.
      */
    /**
      * Time in seconds between suffocation damage.
      * @name Breathable#suffocateTime
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Time in seconds the entity can hold its breath.
      * @name Breathable#totalSupply
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Sets the current air supply of the entity.
  *
  * @method
  * @param {number} value - New air supply for the entity. 
  * @throws This function can throw errors.
  */
setAirSupply (value) {
}

     constructor() {
      /**
        * List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.
        * 
        * @type {Array.<{module:Minecraft~BlockPermutation}>}
        */
      this['breatheBlocks'];
      /**
        * If true, this entity can breathe in air.
        * 
        * @type {boolean}
        */
      this['breathesAir'];
      /**
        * If true, this entity can breathe in lava.
        * 
        * @type {boolean}
        */
      this['breathesLava'];
      /**
        * If true, this entity can breathe in solid blocks.
        * 
        * @type {boolean}
        */
      this['breathesSolids'];
      /**
        * If true, this entity can breathe in water.
        * 
        * @type {boolean}
        */
      this['breathesWater'];
      /**
        * If true, this entity will have visible bubbles while in water.
        * 
        * @type {boolean}
        */
      this['generatesBubbles'];
      /**
        * Identifier of this component. Should always be minecraft:breathable.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Time in seconds to recover breath to maximum.
        * 
        * @type {number}
        */
      this['inhaleTime'];
      /**
        * List of blocks this entity can't breathe in.
        * 
        * @type {Array.<{module:Minecraft~BlockPermutation}>}
        */
      this['nonBreatheBlocks'];
      /**
        * Time in seconds between suffocation damage.
        * 
        * @type {number}
        */
      this['suffocateTime'];
      /**
        * Time in seconds the entity can hold its breath.
        * 
        * @type {number}
        */
      this['totalSupply'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class ChangeWeatherEventSignal {
    
/**
  *
  * @method
  * @param {function(module:Minecraft~WeatherChangedEvent):undefined} callback -  
  * @returns {function(module:Minecraft~WeatherChangedEvent):undefined}
  */
subscribe (callback) {
}
/**
  *
  * @method
  * @param {function(module:Minecraft~WeatherChangedEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * An event that fires as players enter chat messages.
 * @hideconstructor
 * @class
 */
class ChatEvent {
    /**
      * Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
      * @name ChatEvent#message
      * @type {string}
      */
    /**
      * Player that sent the chat message.
      * @name ChatEvent#sender
      * @type {module:Minecraft~Player}
      */
    /**
      * If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
      * @name ChatEvent#sendToTargets
      * @type {boolean}
      */
    /**
      * List of players that will receive this message.
      * @name ChatEvent#targets
      * @type {Array.<{module:Minecraft~Player}>}
      */
    

     constructor() {
      /**
        * Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
        * 
        * @type {string}
        */
      this['message'];
      /**
        * Player that sent the chat message.
        * 
        * @type {module:Minecraft~Player}
        */
      this['sender'];
      /**
        * If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
        * 
        * @type {boolean}
        */
      this['sendToTargets'];
      /**
        * List of players that will receive this message.
        * 
        * @type {Array.<{module:Minecraft~Player}>}
        */
      this['targets'];
    }
  }
  
/** 
 * Manages callbacks that are connected to chat messages being sent.
 * @hideconstructor
 * @class
 */
class ChatEventSignal {
    
/**
  * Adds a callback that will be called when new chat messages are sent.
  *
  * @method
  * @param {function(module:Minecraft~ChatEvent):undefined} callback -  
  * @returns {function(module:Minecraft~ChatEvent):undefined}
  * @example <caption>custom_command.js</caption>
  *    // Kills the chatting player if they type "!killme"
  *    const chatCallback = World.events.beforeChat.subscribe((eventData) => {
  *      if (eventData.message.includes("cancel")) {
  *        // Cancel event if the message contains "cancel"
  *        eventData.canceled = true;
  *      } else {
  *        // Modify chat message being sent
  *        eventData.message = `Modified '${eventData.message}'`;
  *      }
  *    });
  *    
  */
subscribe (callback) {
}
/**
  * Removes a callback from being called when new chat messages are sent.
  *
  * @method
  * @param {function(module:Minecraft~ChatEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * Defines the entity's color. Only works on vanilla entities that have predefined color values (sheep, llama, shulker).
 * @hideconstructor
 * @class
 */
class Color {
    /**
      * Identifier of this component. Should always be minecraft:color.
      * @name Color#id
      * @type {string}
      */
    /**
      * The palette color value of the entity.
      * @name Color#value
      * @type {number}
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:color.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The palette color value of the entity.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * Contains a method that lets you run console commands within Minecraft.
 * @hideconstructor
 * @class
 */
class Commands {
    
/**
  * Runs a particular command from the context of the server. Command strings should not start with slash.
  *
  * @method
  * @param {string} commandString -  
  * @returns {any}
  * @throws This function can throw errors.
  * @example <caption>commands.js</caption>
  *    Commands.run("say You got a new high score!");
  *    Commands.run("scoreboard players set @p score 10");
  *    
  */
run (commandString) {
}

     constructor() {
    }
  }
  
/** 
 * Represents a container that can hold sets of items. Used with entities such as Players, Chest Minecarts, Llamas, and more.
 * @hideconstructor
 * @class
 */
class Container {
    /**
      * Contains a count of the slots in the container that are empty.
      * @name Container#emptySlotsCount
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
      * @name Container#size
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Adds an item to the specified container. Item will be placed in the first available empty slot. (use .setItem if you wish to set items in a particular slot.)
  *
  * @method
  * @param {module:Minecraft~ItemStack} itemStack - The stack of items to add. 
  * @throws This function can throw errors.
  */
addItem (itemStack) {
}
/**
  * Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to retrieve items from. 
  * @returns {module:Minecraft~ItemStack}
  * @throws This function can throw errors.
  * @example <caption>getItem.js</caption>
  *    const itemStack = rightChestContainer.getItem(0);
  *    test.assert(itemStack.id === "apple", "Expected apple");
  *    test.assert(itemStack.amount === 10, "Expected 10 apples");
  *    
  */
getItem (slot) {
}
/**
  * Sets an item stack within a particular slot.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to set an item at. 
  * @param {module:Minecraft~ItemStack} itemStack - Stack of items to place within the specified slot. 
  * @throws This function can throw errors.
  */
setItem (slot, itemStack) {
}
/**
  * Swaps items between two different slots within containers.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to swap from this container. 
  * @param {number} otherSlot - Zero-based index of the slot to swap with. 
  * @param {module:Minecraft~Container} otherContainer - Target container to swap with. Note this can be the same container as this source. 
  * @returns {boolean}
  * @throws This function can throw errors.
  * @example <caption>swapItems.js</caption>
  *    rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
  *    
  */
swapItems (slot, otherSlot, otherContainer) {
}
/**
  * Moves an item from one slot to another, potentially across containers.
  *
  * @method
  * @param {number} fromSlot -  
  * @param {number} toSlot - Zero-based index of the slot to move to. 
  * @param {module:Minecraft~Container} toContainer - Target container to transfer to. Note this can be the same container as the source. 
  * @returns {boolean}
  * @throws This function can throw errors.
  * @example <caption>transferItem.js</caption>
  *    rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
  *    
  */
transferItem (fromSlot, toSlot, toContainer) {
}

     constructor() {
      /**
        * Contains a count of the slots in the container that are empty.
        * 
        * @type {number}
        */
      this['emptySlotsCount'];
      /**
        * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
        * 
        * @type {number}
        */
      this['size'];
    }
  }
  
/** 
 * A class that represents a particular dimension (e.g., The End) within a world.
 * @hideconstructor
 * @class
 */
class Dimension {
    
/**
  * Creates an explosion at the specified location.
  *
  * @method
  * @param {module:Minecraft~Location} location - The location of the explosion. 
  * @param {number} radius - Radius, in blocks, of the explosion to create. 
  * @param {module:Minecraft~ExplosionOptions} explosionOptions - Additional configurable options for the explosion. 
  * @throws This function can throw errors.
  */
createExplosion (location, radius, explosionOptions) {
}
/**
  * Returns a block instance at the given location. This method was introduced as of version 1.17.10.21.
  *
  * @method
  * @param {module:Minecraft~BlockLocation} location - The location at which to return a block. 
  * @returns {module:Minecraft~Block}
  */
getBlock (location) {
}
/**
  *
  * @method
  * @param {module:Minecraft~BlockLocation} location -  
  * @returns {Array.<{module:Minecraft~Entity}>}
  */
getEntitiesAtBlockLocation (location) {
}
/**
  * Tests whether a particular location contains an Air (empty) block.
  *
  * @method
  * @param {module:Minecraft~BlockLocation} location - The location at which to check for emptiness 
  * @returns {boolean}
  */
isEmpty (location) {
}
/**
  * Creates a new entity (e.g., a mob) at the specified location. This method was introduced as of version 1.17.10.21.
  *
  * @method
  * @param {string} identifier - Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed. 
  * @param {module:Minecraft~BlockLocation} location - The location at which to create the entity. 
  * @returns {module:Minecraft~Entity}
  * @throws This function can throw errors.
  */
spawnEntity (identifier, location) {
}

     constructor() {
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class Direction {
    /**
      * @name Direction#down
      * @type {number}
      */
    /**
      * @name Direction#east
      * @type {number}
      */
    /**
      * @name Direction#north
      * @type {number}
      */
    /**
      * @name Direction#south
      * @type {number}
      */
    /**
      * @name Direction#up
      * @type {number}
      */
    /**
      * @name Direction#west
      * @type {number}
      */
    

     constructor() {
      /**
        * 
        * @type {number}
        */
      this['down'];
      /**
        * 
        * @type {number}
        */
      this['east'];
      /**
        * 
        * @type {number}
        */
      this['north'];
      /**
        * 
        * @type {number}
        */
      this['south'];
      /**
        * 
        * @type {number}
        */
      this['up'];
      /**
        * 
        * @type {number}
        */
      this['west'];
    }
  }
  
/** 
 * Represents an effect - like poison - that has been added to an Entity.
 * @hideconstructor
 * @class
 */
class Effect {
    /**
      * Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.
      * @name Effect#amplifier
      * @type {number}
      */
    /**
      * Gets the player-friendly name of this effect.
      * @name Effect#displayName
      * @type {string}
      */
    /**
      * Gets the entire specified duration, in seconds, of this effect.
      * @name Effect#duration
      * @type {number}
      */
    

     constructor() {
      /**
        * Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.
        * 
        * @type {number}
        */
      this['amplifier'];
      /**
        * Gets the player-friendly name of this effect.
        * 
        * @type {string}
        */
      this['displayName'];
      /**
        * Gets the entire specified duration, in seconds, of this effect.
        * 
        * @type {number}
        */
      this['duration'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class Effects {
    /**
      * @name Effects#absorption
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#badOmen
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#blindness
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#conduitPower
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#empty
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#fatalPoison
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#fireResistance
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#haste
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#healthBoost
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#hunger
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#instantDamage
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#instantHealth
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#invisibility
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#jumpBoost
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#levitation
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#miningFatigue
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#nausea
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#nightVision
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#poison
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#regeneration
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#resistance
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#saturation
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#slowFalling
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#slowness
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#speed
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#strength
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#villageHero
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#waterBreathing
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#weakness
      * @type {module:Minecraft~EffectType}
      */
    /**
      * @name Effects#wither
      * @type {module:Minecraft~EffectType}
      */
    

     constructor() {
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['absorption'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['badOmen'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['blindness'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['conduitPower'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['empty'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['fatalPoison'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['fireResistance'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['haste'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['healthBoost'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['hunger'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['instantDamage'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['instantHealth'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['invisibility'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['jumpBoost'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['levitation'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['miningFatigue'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['nausea'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['nightVision'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['poison'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['regeneration'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['resistance'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['saturation'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['slowFalling'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['slowness'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['speed'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['strength'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['villageHero'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['waterBreathing'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['weakness'];
      /**
        * 
        * @type {module:Minecraft~EffectType}
        */
      this['wither'];
    }
  }
  
/** 
 * Represents a type of effect - like poison - that can be applied to an entity.
 * @hideconstructor
 * @class
 */
class EffectType {
    
/**
  * Identifier name of this effect type.
  *
  * @method
  * @returns {string}
  */
getName () {
}

     constructor() {
    }
  }
  
/** 
 * Manages callbacks associated with simple events, like Tick.
 * @hideconstructor
 * @class
 */
class EmptySignal {
    
/**
  * Adds a callback that will be called for basic events that take no arguments, like Tick.
  *
  * @method
  * @param {function():undefined} callback -  
  * @returns {function():undefined}
  */
subscribe (callback) {
}
/**
  * Removes a callback from being called for basic events.
  *
  * @method
  * @param {function():undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * Represents the state of an entity (a mob, the player, or other moving objects like Minecarts) in the world.
 * @hideconstructor
 * @class
 */
class Entity {
    /**
      * @name Entity#id
      * @type {string}
      * @throws This function can throw errors.
      */
    /**
      * @name Entity#isSneaking
      * @type {boolean}
      */
    /**
      * @name Entity#location
      * @type {module:Minecraft~Location}
      * @throws This function can throw errors.
      */
    /**
      * @name Entity#nameTag
      * @type {string}
      */
    /**
      * @name Entity#velocity
      * @type {module:Minecraft~Location}
      * @throws This function can throw errors.
      */
    
/**
  * Adds an effect, like poison, to the entity.
  *
  * @method
  * @param {module:Minecraft~EffectType} effectType - Type of effect to add to the entity. 
  * @param {number} duration - Amount of time, in seconds, for the effect to apply. 
  * @param {number} amplifier - Optional amplification of the effect to apply. 
  * @throws This function can throw errors.
  * @example <caption>addEffect.js</caption>
  *    const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
  *    const villagerLoc = new BlockLocation(1, 2, 1);
  *    const villager = test.spawn(villagerId, villagerLoc);
  *    const duration = 20;
  *    
  *    villager.addEffect(Effects.poison, duration, 1);
  *    
  */
addEffect (effectType, duration, amplifier) {
}
/**
  * Gets a component (that represents additional capabilities) for an entity.
  *
  * @method
  * @param {string} componentId - The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned. 
  * @returns {any}
  */
getComponent (componentId) {
}
/**
  * Returns all components that are both present on this entity and supported by the API.
  *
  * @method
  * @returns {Array.<{any}>}
  */
getComponents () {
}
/**
  * Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.
  *
  * @method
  * @param {module:Minecraft~EffectType} effectType -  
  * @returns {module:Minecraft~Effect}
  * @throws This function can throw errors.
  */
getEffect (effectType) {
}
/**
  * Returns true if the specified component is present on this entity.
  *
  * @method
  * @param {string} componentId - The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. 
  * @returns {boolean}
  */
hasComponent (componentId) {
}
/**
  * Kills this entity. The entity will drop loot as normal.
  *
  * @method
  * @throws This function can throw errors.
  */
kill () {
}
/**
  * Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
  *
  * @method
  * @param {string} eventName - Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed. 
  * @throws This function can throw errors.
  */
triggerEvent (eventName) {
}

     constructor() {
      /**
        * 
        * @type {string}
        */
      this['id'];
      /**
        * 
        * @type {boolean}
        */
      this['isSneaking'];
      /**
        * 
        * @type {module:Minecraft~Location}
        */
      this['location'];
      /**
        * 
        * @type {string}
        */
      this['nameTag'];
      /**
        * 
        * @type {module:Minecraft~Location}
        */
      this['velocity'];
    }
  }
  
/** 
 * As part of the Ageable component, represents a set of items that can be fed to an entity and the rate at which that causes them to grow.
 * @hideconstructor
 * @class
 */
class EntityDefinitionFeedItem {
    /**
      * The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1.
      * @name EntityDefinitionFeedItem#growth
      * @type {number}
      */
    /**
      * Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
      * @name EntityDefinitionFeedItem#item
      * @type {string}
      */
    

     constructor() {
      /**
        * The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1.
        * 
        * @type {number}
        */
      this['growth'];
      /**
        * Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
        * 
        * @type {string}
        */
      this['item'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class EntityEvent {
    /**
      * @name EntityEvent#entity
      * @type {module:Minecraft~Entity}
      */
    

     constructor() {
      /**
        * 
        * @type {module:Minecraft~Entity}
        */
      this['entity'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class EntityEventSignal {
    
/**
  *
  * @method
  * @param {function(module:Minecraft~EntityEvent):undefined} callback -  
  * @returns {function(module:Minecraft~EntityEvent):undefined}
  */
subscribe (callback) {
}
/**
  *
  * @method
  * @param {function(module:Minecraft~EntityEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * Contains a set of events that are available across the scope of the World.
 * @hideconstructor
 * @class
 */
class Events {
    /**
      * This event fires when a piston expands or retracts.
      * @name Events#activatePiston
      * @type {module:Minecraft~ActivatePistonEventSignal}
      */
    /**
      * This event fires when an effect, like poisoning, is added to an entity.
      * @name Events#addEffect
      * @type {module:Minecraft~AddEffectEventSignal}
      */
    /**
      * Fires before a piston is activated.
      * @name Events#beforeActivatePiston
      * @type {module:Minecraft~BeforeActivatePistonEventSignal}
      */
    /**
      * This event fires before a chat message is broadcast or delivered. The event can be canceled, and the message can also be updated.
      * @name Events#beforeChat
      * @type {module:Minecraft~BeforeChatEventSignal}
      */
    /**
      * This event is fired before an explosion occurs.
      * @name Events#beforeExplosion
      * @type {module:Minecraft~BeforeExplosionEventSignal}
      */
    /**
      * This event will be triggered when the weather changes within Minecraft.
      * @name Events#changeWeather
      * @type {module:Minecraft~ChangeWeatherEventSignal}
      */
    /**
      * This event is triggered after a chat message has been broadcast or sent to players.
      * @name Events#chat
      * @type {module:Minecraft~ChatEventSignal}
      */
    /**
      * This event fires when a new entity is created.
      * @name Events#createEntity
      * @type {module:Minecraft~EntityEventSignal}
      */
    /**
      * This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.
      * @name Events#explodeBlock
      * @type {module:Minecraft~ExplodeBlockSignal}
      */
    /**
      * This event is fired after an explosion occurs.
      * @name Events#explosion
      * @type {module:Minecraft~ExplosionEventSignal}
      */
    /**
      * This event fires every tick - which is 20 times per second.
      * @name Events#tick
      * @type {module:Minecraft~EmptySignal}
      */
    

     constructor() {
      /**
        * This event fires when a piston expands or retracts.
        * 
        * @type {module:Minecraft~ActivatePistonEventSignal}
        */
      this['activatePiston'];
      /**
        * This event fires when an effect, like poisoning, is added to an entity.
        * 
        * @type {module:Minecraft~AddEffectEventSignal}
        */
      this['addEffect'];
      /**
        * Fires before a piston is activated.
        * 
        * @type {module:Minecraft~BeforeActivatePistonEventSignal}
        */
      this['beforeActivatePiston'];
      /**
        * This event fires before a chat message is broadcast or delivered. The event can be canceled, and the message can also be updated.
        * 
        * @type {module:Minecraft~BeforeChatEventSignal}
        */
      this['beforeChat'];
      /**
        * This event is fired before an explosion occurs.
        * 
        * @type {module:Minecraft~BeforeExplosionEventSignal}
        */
      this['beforeExplosion'];
      /**
        * This event will be triggered when the weather changes within Minecraft.
        * 
        * @type {module:Minecraft~ChangeWeatherEventSignal}
        */
      this['changeWeather'];
      /**
        * This event is triggered after a chat message has been broadcast or sent to players.
        * 
        * @type {module:Minecraft~ChatEventSignal}
        */
      this['chat'];
      /**
        * This event fires when a new entity is created.
        * 
        * @type {module:Minecraft~EntityEventSignal}
        */
      this['createEntity'];
      /**
        * This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.
        * 
        * @type {module:Minecraft~ExplodeBlockSignal}
        */
      this['explodeBlock'];
      /**
        * This event is fired after an explosion occurs.
        * 
        * @type {module:Minecraft~ExplosionEventSignal}
        */
      this['explosion'];
      /**
        * This event fires every tick - which is 20 times per second.
        * 
        * @type {module:Minecraft~EmptySignal}
        */
      this['tick'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class ExplodeBlockEvent {
    /**
      * @name ExplodeBlockEvent#destroyedBlock
      * @type {module:Minecraft~Block}
      */
    /**
      * @name ExplodeBlockEvent#source
      * @type {module:Minecraft~Entity}
      */
    

     constructor() {
      /**
        * 
        * @type {module:Minecraft~Block}
        */
      this['destroyedBlock'];
      /**
        * 
        * @type {module:Minecraft~Entity}
        */
      this['source'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class ExplodeBlockSignal {
    
/**
  *
  * @method
  * @param {function(module:Minecraft~ExplodeBlockEvent):undefined} callback -  
  * @returns {function(module:Minecraft~ExplodeBlockEvent):undefined}
  */
subscribe (callback) {
}
/**
  *
  * @method
  * @param {function(module:Minecraft~ExplodeBlockEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class ExplosionEvent {
    /**
      * @name ExplosionEvent#dimension
      * @type {module:Minecraft~Dimension}
      */
    /**
      * @name ExplosionEvent#impactedBlocks
      * @type {Array.<{module:Minecraft~BlockLocation}>}
      */
    /**
      * @name ExplosionEvent#source
      * @type {module:Minecraft~Entity}
      */
    

     constructor() {
      /**
        * 
        * @type {module:Minecraft~Dimension}
        */
      this['dimension'];
      /**
        * 
        * @type {Array.<{module:Minecraft~BlockLocation}>}
        */
      this['impactedBlocks'];
      /**
        * 
        * @type {module:Minecraft~Entity}
        */
      this['source'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class ExplosionEventSignal {
    
/**
  *
  * @method
  * @param {function(module:Minecraft~ExplosionEvent):undefined} callback -  
  * @returns {function(module:Minecraft~ExplosionEvent):undefined}
  */
subscribe (callback) {
}
/**
  *
  * @method
  * @param {function(module:Minecraft~ExplosionEvent):undefined} callback -  
  * @throws This function can throw errors.
  */
unsubscribe (callback) {
}

     constructor() {
    }
  }
  
/** 
 * Additional configuration options for the {@link Minecraft.Dimension.createExplosion} method.
 * @class
 */
class ExplosionOptions {
    /**
      * Whether parts of the explosion also impact underwater.
      * @name ExplosionOptions#allowUnderwater
      * @type {boolean}
      */
    /**
      * Whether the explosion will break blocks within the blast radius.
      * @name ExplosionOptions#breaksBlocks
      * @type {boolean}
      */
    /**
      * If true, the explosion is accompanied by fires within or near the blast radius.
      * @name ExplosionOptions#causesFire
      * @type {boolean}
      */
    /**
      * Optional source of the explosion.
      * @name ExplosionOptions#source
      * @type {module:Minecraft~Entity}
      */
    
/**
  *
  * @constructor
  * @returns {module:Minecraft~ExplosionOptions}
  */
constructor () {
    /**
      * Whether parts of the explosion also impact underwater.
      * @type {boolean}
      */
    this['allowUnderwater'];
    /**
      * Whether the explosion will break blocks within the blast radius.
      * @type {boolean}
      */
    this['breaksBlocks'];
    /**
      * If true, the explosion is accompanied by fires within or near the blast radius.
      * @type {boolean}
      */
    this['causesFire'];
    /**
      * Optional source of the explosion.
      * @type {module:Minecraft~Entity}
      */
    this['source'];
}

  }
  
/** 
 * As part of the Healable component, represents a specific item that can be fed to an entity to cause health effects.
 * @hideconstructor
 * @class
 */
class FeedItem {
    /**
      * As part of the Healable component, an optional collection of side effects that can occur from being fed an item.
      * @name FeedItem#effects
      * @type {Array.<{module:Minecraft~FeedItemEffect}>}
      */
    /**
      * The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40.
      * @name FeedItem#healAmount
      * @type {number}
      */
    /**
      * Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
      * @name FeedItem#item
      * @type {string}
      */
    

     constructor() {
      /**
        * As part of the Healable component, an optional collection of side effects that can occur from being fed an item.
        * 
        * @type {Array.<{module:Minecraft~FeedItemEffect}>}
        */
      this['effects'];
      /**
        * The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40.
        * 
        * @type {number}
        */
      this['healAmount'];
      /**
        * Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
        * 
        * @type {string}
        */
      this['item'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class FeedItemEffect {
    /**
      * Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.
      * @name FeedItemEffect#amplifier
      * @type {number}
      */
    /**
      * Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1.
      * @name FeedItemEffect#chance
      * @type {number}
      */
    /**
      * Gets the duration, in seconds, of this effect.
      * @name FeedItemEffect#duration
      * @type {number}
      */
    /**
      * Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'.
      * @name FeedItemEffect#name
      * @type {string}
      */
    

     constructor() {
      /**
        * Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.
        * 
        * @type {number}
        */
      this['amplifier'];
      /**
        * Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1.
        * 
        * @type {number}
        */
      this['chance'];
      /**
        * Gets the duration, in seconds, of this effect.
        * 
        * @type {number}
        */
      this['duration'];
      /**
        * Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'.
        * 
        * @type {string}
        */
      this['name'];
    }
  }
  
/** 
 * Represents a set of filters for when an event should occur.
 * @hideconstructor
 * @class
 */
class FilterGroup {
    

     constructor() {
    }
  }
  
/** 
 * Represents the flying speed of an entity.
 * @hideconstructor
 * @class
 */
class FlyingSpeed {
    /**
      * Identifier of this component. Should always be minecraft:flying_speed.
      * @name FlyingSpeed#id
      * @type {string}
      */
    /**
      * Speed while flying value of the entity.
      * @name FlyingSpeed#value
      * @type {number}
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:flying_speed.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Speed while flying value of the entity.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * Defines the interactions with this entity for healing it.
 * @hideconstructor
 * @class
 */
class Healable {
    /**
      * A set of filters for when these Healable items would apply.
      * @name Healable#filters
      * @type {module:Minecraft~FilterGroup}
      * @throws This function can throw errors.
      */
    /**
      * Determines if an item can be used regardless of the entity being at full health.
      * @name Healable#forceUse
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:healable.
      * @name Healable#id
      * @type {string}
      */
    /**
      * A set of items that can specifically heal this entity.
      * @name Healable#items
      * @type {Array.<{module:Minecraft~FeedItem}>}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * A set of filters for when these Healable items would apply.
        * 
        * @type {module:Minecraft~FilterGroup}
        */
      this['filters'];
      /**
        * Determines if an item can be used regardless of the entity being at full health.
        * 
        * @type {boolean}
        */
      this['forceUse'];
      /**
        * Identifier of this component. Should always be minecraft:healable.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * A set of items that can specifically heal this entity.
        * 
        * @type {Array.<{module:Minecraft~FeedItem}>}
        */
      this['items'];
    }
  }
  
/** 
 * Defines the health properties of an entity.
 * @hideconstructor
 * @class
 */
class Health {
    /**
      * Read-only. Returns the current value of health for the entity.
      * @name Health#current
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:health.
      * @name Health#id
      * @type {string}
      */
    /**
      * Value for health as defined through entity components.
      * @name Health#value
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Resets the current health value of the entity to its default value.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToDefaultValue () {
}
/**
  * Resets the current health of the entity to its maximum value.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMaxValue () {
}
/**
  * Resets the current health to the minimum value.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMinValue () {
}
/**
  * Sets the current health of the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
setCurrent () {
}

     constructor() {
      /**
        * Read-only. Returns the current value of health for the entity.
        * 
        * @type {number}
        */
      this['current'];
      /**
        * Identifier of this component. Should always be minecraft:health.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Value for health as defined through entity components.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * Contains the state of an integer-based property for a {@link Minecraft.BlockPermutation}.
 * @hideconstructor
 * @class
 */
class IntBlockProperty {
    /**
      * The name of this property.
      * @name IntBlockProperty#name
      * @type {string}
      */
    /**
      * A list of valid values for this particular property.
      * @name IntBlockProperty#validValues
      * @type {Array.<{number}>}
      */
    /**
      * The current value of this property.
      * @name IntBlockProperty#value
      * @type {number}
      */
    

     constructor() {
      /**
        * The name of this property.
        * 
        * @type {string}
        */
      this['name'];
      /**
        * A list of valid values for this particular property.
        * 
        * @type {Array.<{number}>}
        */
      this['validValues'];
      /**
        * The current value of this property.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * Defines this entity's inventory properties.
 * @hideconstructor
 * @class
 */
class Inventory {
    /**
      * Number of slots that this entity can gain per extra strength.
      * @name Inventory#additionalSlotsPerStrength
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * If true, the contents of this inventory can be removed by a hopper.
      * @name Inventory#canBeSiphonedFrom
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Defines the interactions with this entity for healing it.
      * @name Inventory#container
      * @type {module:Minecraft~InventoryComponentContainer}
      * @throws This function can throw errors.
      */
    /**
      * Type of container this entity has.
      * @name Inventory#containerType
      * @type {string}
      * @throws This function can throw errors.
      */
    /**
      * Number of slots the container has.
      * @name Inventory#inventorySize
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * If true, the entity will not drop it's inventory on death.
      * @name Inventory#private
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * If true, the entity's inventory can only be accessed by its owner or itself.
      * @name Inventory#restrictToOwner
      * @type {boolean}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Number of slots that this entity can gain per extra strength.
        * 
        * @type {number}
        */
      this['additionalSlotsPerStrength'];
      /**
        * If true, the contents of this inventory can be removed by a hopper.
        * 
        * @type {boolean}
        */
      this['canBeSiphonedFrom'];
      /**
        * Defines the interactions with this entity for healing it.
        * 
        * @type {module:Minecraft~InventoryComponentContainer}
        */
      this['container'];
      /**
        * Type of container this entity has.
        * 
        * @type {string}
        */
      this['containerType'];
      /**
        * Number of slots the container has.
        * 
        * @type {number}
        */
      this['inventorySize'];
      /**
        * If true, the entity will not drop it's inventory on death.
        * 
        * @type {boolean}
        */
      this['private'];
      /**
        * If true, the entity's inventory can only be accessed by its owner or itself.
        * 
        * @type {boolean}
        */
      this['restrictToOwner'];
    }
  }
  
/** 
 * Represents a container that can hold stacks of items. Used for entities like Players, Chest Minecarts, Llamas, and more.
 * @hideconstructor
 * @class
 */
class InventoryComponentContainer {
    /**
      * The number of empty slots in the container.
      * @name InventoryComponentContainer#emptySlotsCount
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
      * @name InventoryComponentContainer#size
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Adds an item to the specified container. Items will be placed in the first available empty slot. (Use {@link Minecraft.InventoryComponentContainer.setItem} if you wish to set items in a particular slot.)
  *
  * @method
  * @param {module:Minecraft~ItemStack} itemStack - The stack of items to add. 
  * @throws This function can throw errors.
  */
addItem (itemStack) {
}
/**
  * Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to retrieve items from. 
  * @returns {module:Minecraft~ItemStack}
  * @throws This function can throw errors.
  * @example <caption>getItem.js</caption>
  *    const itemStack = rightChestContainer.getItem(0);
  *    test.assert(itemStack.id === "apple", "Expected apple");
  *    test.assert(itemStack.amount === 10, "Expected 10 apples");
  *    
  */
getItem (slot) {
}
/**
  * Sets an item stack within a particular slot.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to set an item at. 
  * @param {module:Minecraft~ItemStack} itemStack - Stack of items to place within the specified slot. 
  * @throws This function can throw errors.
  */
setItem (slot, itemStack) {
}
/**
  * Swaps items between two different slots within containers.
  *
  * @method
  * @param {number} slot - Zero-based index of the slot to swap from this container. 
  * @param {number} otherSlot - Zero-based index of the slot to swap with. 
  * @param {module:Minecraft~Container} otherContainer - Target container to swap with. Note this can be the same container as this source. 
  * @returns {boolean}
  * @throws This function can throw errors.
  * @example <caption>swapItems.js</caption>
  *    rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
  *    
  */
swapItems (slot, otherSlot, otherContainer) {
}
/**
  * Moves an item from one slot to another, potentially across containers.
  *
  * @method
  * @param {number} fromSlot -  
  * @param {number} toSlot - Zero-based index of the slot to move to. 
  * @param {module:Minecraft~Container} toContainer - Target container to transfer to. Note this can be the same container as the source. 
  * @returns {boolean}
  * @throws This function can throw errors.
  * @example <caption>transferItem.js</caption>
  *    rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
  *    
  */
transferItem (fromSlot, toSlot, toContainer) {
}

     constructor() {
      /**
        * The number of empty slots in the container.
        * 
        * @type {number}
        */
      this['emptySlotsCount'];
      /**
        * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
        * 
        * @type {number}
        */
      this['size'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class Items {
    /**
      * @name Items#acaciaBoat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaFenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaStandingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#acaciaWallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#activatorRail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#agentSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#air
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#allow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#amethystBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#amethystCluster
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#amethystShard
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ancientDebris
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#andesiteStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#anvil
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#apple
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#armorStand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#arrow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#axolotlBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#axolotlSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#azalea
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#azaleaLeaves
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#azaleaLeavesFlowered
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bakedPotato
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#balloon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bamboo
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bambooSapling
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#banner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#barrel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#barrier
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#basalt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#batSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beacon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bed
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bedrock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beef
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beehive
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beeNest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beeSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beetroot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beetrootSeeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#beetrootSoup
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bell
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bigDripleaf
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchBoat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchFenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchStandingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#birchWallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackstoneDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackstoneSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackstoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blackstoneWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blastFurnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blazePowder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blazeRod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blazeSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bleach
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blueCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blueCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blueDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blueGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#blueIce
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#boneBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#boneMeal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#book
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bookshelf
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#borderBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bordureIndentedBannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bowl
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bread
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brewingStand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brewingstandblock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brickBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brownCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brownCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brownDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brownGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brownMushroom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#brownMushroomBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bubbleColumn
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#buddingAmethyst
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cactus
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#calcite
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#camera
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#campfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#candleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#carpet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#carrot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#carrotOnAStick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#carrots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cartographyTable
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#carvedPumpkin
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#catSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cauldron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#caveSpiderSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#caveVines
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#caveVinesBodyWithBerries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#caveVinesHeadWithBerries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chain
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chainCommandBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chainmailBoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chainmailChestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chainmailHelmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chainmailLeggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#charcoal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chemicalHeat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chemistryTable
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chestMinecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chicken
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chickenSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chiseledDeepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chiseledNetherBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chiseledPolishedBlackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chorusFlower
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chorusFruit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#chorusPlant
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#clay
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#clayBall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#clock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coalBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coalOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cobbledDeepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cobbledDeepslateDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cobbledDeepslateSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cobbledDeepslateStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cobbledDeepslateWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cobblestone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cobblestoneWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cocoa
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cocoaBeans
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#codBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#codSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coloredTorchBp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coloredTorchRg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#commandBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#commandBlockMinecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#comparator
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#compass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#composter
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#compound
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#concrete
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#concretePowder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#conduit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookedBeef
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookedChicken
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookedCod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookedMutton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookedPorkchop
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookedRabbit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookedSalmon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cookie
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#copperBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#copperIngot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#copperOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coral
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coralBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coralFan
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coralFanDead
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coralFanHang
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coralFanHang2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#coralFanHang3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cowSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crackedDeepslateBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crackedDeepslateTiles
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crackedNetherBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crackedPolishedBlackstoneBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#craftingTable
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#creeperBannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#creeperSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonFence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonFenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonFungus
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonHyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonNylium
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonPlanks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonRoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonStandingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonStem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crimsonWallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#crossbow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cryingObsidian
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cyanCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cyanCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cyanDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#cyanGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakBoat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakFenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkoakStandingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkOakTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkoakWallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#darkPrismarineStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#daylightDetector
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#daylightDetectorInverted
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deadbush
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#debugStick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateBrickDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateBrickSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateBrickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateBrickWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateCoalOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateCopperOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateDiamondOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateEmeraldOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateGoldOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateIronOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateLapisOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateRedstoneOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateTileDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateTiles
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateTileSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateTileStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deepslateTileWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#deny
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#detectorRail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamond
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondAxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondBoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondChestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondHelmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondHoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondHorseArmor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondLeggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondPickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondShovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#diamondSword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dioriteStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dirt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dirtWithRoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dispenser
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dolphinSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#donkeySpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#doubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#doublePlant
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#doubleStoneSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#doubleStoneSlab2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#doubleStoneSlab3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#doubleStoneSlab4
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#doubleWoodenSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dragonBreath
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dragonEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#driedKelp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#driedKelpBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dripstoneBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dropper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#drownedSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#elderGuardianSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element0
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element1
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element10
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element100
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element101
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element102
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element103
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element104
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element105
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element106
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element107
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element108
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element109
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element11
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element110
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element111
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element112
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element113
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element114
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element115
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element116
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element117
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element118
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element12
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element13
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element14
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element15
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element16
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element17
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element18
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element19
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element20
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element21
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element22
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element23
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element24
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element25
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element26
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element27
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element28
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element29
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element30
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element31
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element32
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element33
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element34
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element35
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element36
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element37
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element38
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element39
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element4
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element40
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element41
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element42
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element43
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element44
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element45
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element46
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element47
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element48
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element49
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element5
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element50
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element51
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element52
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element53
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element54
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element55
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element56
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element57
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element58
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element59
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element6
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element60
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element61
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element62
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element63
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element64
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element65
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element66
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element67
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element68
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element69
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element7
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element70
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element71
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element72
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element73
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element74
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element75
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element76
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element77
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element78
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element79
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element8
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element80
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element81
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element82
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element83
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element84
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element85
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element86
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element87
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element88
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element89
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element9
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element90
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element91
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element92
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element93
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element94
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element95
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element96
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element97
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element98
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#element99
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#elytra
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#emerald
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#emeraldBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#emeraldOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#emptyMap
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#enchantedBook
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#enchantedGoldenApple
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#enchantingTable
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endBrickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endCrystal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#enderChest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#enderEye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endermanSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endermiteSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#enderPearl
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endGateway
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endPortal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endPortalFrame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endRod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#endStone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#evokerSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#experienceBottle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#exposedCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#exposedCutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#exposedCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#exposedCutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#exposedDoubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#farmland
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#feather
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fermentedSpiderEye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fieldMasonedBannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#filledMap
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fireCharge
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fireworkRocket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fireworkStar
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fishingRod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#fletchingTable
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#flint
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#flintAndSteel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#flowerBannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#floweringAzalea
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#flowerPot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#flowingLava
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#flowingWater
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#foxSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#frame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#frostedIce
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#furnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ghastSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ghastTear
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#gildedBlackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glassBottle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glassPane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glisteringMelonSlice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowBerries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowFrame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowingobsidian
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowInkSac
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowLichen
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowSquidSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowStick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#glowstoneDust
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goatHorn
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goatSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenApple
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenAxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenBoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenCarrot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenChestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenHelmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenHoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenHorseArmor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenLeggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenPickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenRail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenShovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldenSword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldIngot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldNugget
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#goldOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#graniteStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#grass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#grassPath
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#gravel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#grayCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#grayCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#grayDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#grayGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#greenCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#greenCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#greenDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#greenGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#grindstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#guardianSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#gunpowder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hangingRoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hardenedClay
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hardGlass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hardGlassPane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hardStainedGlass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hardStainedGlassPane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hayBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#heartOfTheSea
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#heavyWeightedPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hoglinSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#honeyBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#honeyBottle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#honeycomb
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#honeycombBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#hopperMinecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#horseSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#huskSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#iceBomb
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#infestedDeepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#infoUpdate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#infoUpdate2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#inkSac
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#invisiblebedrock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironAxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironBars
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironBoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironChestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironHelmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironHoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironHorseArmor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironIngot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironLeggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironNugget
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironPickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironShovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironSword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ironTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.acaciaDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.bed
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.beetroot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.birchDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.camera
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.campfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.cauldron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.chain
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.crimsonDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.darkOakDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.flowerPot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.frame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.glowFrame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.hopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.ironDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.jungleDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.kelp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.netherSprouts
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.netherWart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.reeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.skull
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.soulCampfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.spruceDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.warpedDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.wheat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#item.woodenDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jigsaw
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jukebox
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleBoat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleFenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#junglePressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleStandingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#jungleWallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#kelp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ladder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lantern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lapisBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lapisLazuli
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lapisOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#largeAmethystBud
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lava
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lavaBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lavaCauldron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lead
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leather
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leatherBoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leatherChestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leatherHelmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leatherHorseArmor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leatherLeggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leaves
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#leaves2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lectern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lever
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightBlueCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightBlueCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightBlueDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightBlueGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightGrayCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightGrayCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightGrayDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightningRod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lightWeightedPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#limeCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#limeCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#limeDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#limeGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lingeringPotion
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#litBlastFurnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#litDeepslateRedstoneOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#litFurnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#litPumpkin
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#litRedstoneLamp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#litRedstoneOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#litSmoker
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#llamaSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lodestone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#lodestoneCompass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#log2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#loom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#magentaCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#magentaCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#magentaDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#magentaGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#magma
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#magmaCream
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#magmaCubeSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#medicine
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mediumAmethystBud
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#melonBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#melonSeeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#melonSlice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#melonStem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#milkBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:acacia_wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:activator_rail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:agent_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:air
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:allow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:amethyst_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:amethyst_cluster
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:amethyst_shard
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ancient_debris
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:andesite_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:anvil
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:apple
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:armor_stand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:arrow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:axolotl_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:axolotl_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:azalea
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:azalea_leaves
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:azalea_leaves_flowered
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:baked_potato
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:balloon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bamboo
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bamboo_sapling
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:banner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:barrel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:barrier
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:basalt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bat_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:beacon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bed
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bedrock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bee_nest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bee_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:beef
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:beehive
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:beetroot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:beetroot_seeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:beetroot_soup
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bell
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:big_dripleaf
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:birch_wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:black_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:black_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:black_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:black_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blackstone_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blackstone_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blackstone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blackstone_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blast_furnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blaze_powder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blaze_rod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blaze_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bleach
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blue_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blue_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blue_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blue_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:blue_ice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bone_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bone_meal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:book
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bookshelf
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:border_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bordure_indented_banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bowl
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bread
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brewing_stand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brewingstandblock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brick_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brown_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brown_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brown_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brown_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brown_mushroom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:brown_mushroom_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bubble_column
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:budding_amethyst
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cactus
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:calcite
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:camera
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:campfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:carpet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:carrot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:carrot_on_a_stick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:carrots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cartography_table
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:carved_pumpkin
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cat_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cauldron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cave_spider_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cave_vines
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cave_vines_body_with_berries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cave_vines_head_with_berries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chain
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chain_command_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chainmail_boots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chainmail_chestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chainmail_helmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chainmail_leggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:charcoal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chemical_heat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chemistry_table
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chest_minecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chicken
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chicken_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chiseled_deepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chiseled_nether_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chiseled_polished_blackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chorus_flower
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chorus_fruit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:chorus_plant
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:clay
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:clay_ball
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:clock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coal_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coal_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cobbled_deepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cobbled_deepslate_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cobbled_deepslate_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cobbled_deepslate_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cobbled_deepslate_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cobblestone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cobblestone_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cocoa
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cocoa_beans
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cod_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cod_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:colored_torch_bp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:colored_torch_rg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:command_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:command_block_minecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:comparator
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:compass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:composter
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:compound
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:concrete
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:concrete_powder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:conduit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cooked_beef
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cooked_chicken
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cooked_cod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cooked_mutton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cooked_porkchop
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cooked_rabbit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cooked_salmon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cookie
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:copper_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:copper_ingot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:copper_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coral
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coral_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coral_fan
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coral_fan_dead
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coral_fan_hang
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coral_fan_hang2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:coral_fan_hang3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cow_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cracked_deepslate_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cracked_deepslate_tiles
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cracked_nether_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cracked_polished_blackstone_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crafting_table
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:creeper_banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:creeper_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_fence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_fungus
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_hyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_nylium
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_planks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_roots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_stem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crimson_wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crossbow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:crying_obsidian
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cyan_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cyan_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cyan_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:cyan_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_oak_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dark_prismarine_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:darkoak_standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:darkoak_wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:daylight_detector
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:daylight_detector_inverted
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deadbush
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:debug_stick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_brick_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_brick_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_brick_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_coal_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_copper_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_diamond_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_emerald_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_gold_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_iron_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_lapis_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_redstone_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_tile_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_tile_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_tile_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_tile_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deepslate_tiles
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:deny
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:detector_rail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_axe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_boots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_chestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_helmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_hoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_horse_armor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_leggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_pickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_shovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diamond_sword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:diorite_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dirt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dirt_with_roots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dispenser
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dolphin_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:donkey_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:double_plant
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:double_stone_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:double_stone_slab2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:double_stone_slab3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:double_stone_slab4
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:double_wooden_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dragon_breath
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dragon_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dried_kelp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dried_kelp_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dripstone_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dropper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:drowned_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:elder_guardian_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_0
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_1
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_10
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_100
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_101
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_102
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_103
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_104
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_105
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_106
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_107
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_108
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_109
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_11
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_110
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_111
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_112
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_113
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_114
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_115
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_116
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_117
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_118
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_12
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_13
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_14
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_15
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_16
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_17
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_18
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_19
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_20
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_21
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_22
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_23
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_24
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_25
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_26
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_27
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_28
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_29
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_30
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_31
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_32
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_33
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_34
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_35
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_36
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_37
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_38
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_39
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_4
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_40
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_41
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_42
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_43
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_44
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_45
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_46
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_47
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_48
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_49
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_5
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_50
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_51
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_52
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_53
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_54
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_55
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_56
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_57
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_58
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_59
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_6
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_60
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_61
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_62
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_63
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_64
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_65
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_66
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_67
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_68
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_69
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_7
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_70
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_71
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_72
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_73
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_74
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_75
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_76
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_77
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_78
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_79
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_8
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_80
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_81
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_82
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_83
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_84
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_85
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_86
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_87
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_88
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_89
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_9
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_90
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_91
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_92
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_93
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_94
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_95
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_96
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_97
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_98
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:element_99
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:elytra
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:emerald
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:emerald_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:emerald_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:empty_map
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:enchanted_book
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:enchanted_golden_apple
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:enchanting_table
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_crystal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_gateway
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_portal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_portal_frame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_rod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:end_stone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ender_chest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ender_eye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ender_pearl
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:enderman_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:endermite_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:evoker_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:experience_bottle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:exposed_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:exposed_cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:exposed_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:exposed_cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:exposed_double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:farmland
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:feather
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fermented_spider_eye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:field_masoned_banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:filled_map
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fire_charge
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:firework_rocket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:firework_star
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fishing_rod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fletching_table
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:flint
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:flint_and_steel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:flower_banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:flower_pot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:flowering_azalea
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:flowing_lava
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:flowing_water
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:fox_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:frame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:frosted_ice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:furnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ghast_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ghast_tear
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gilded_blackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glass_bottle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glass_pane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glistering_melon_slice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glow_berries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glow_frame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glow_ink_sac
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glow_lichen
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glow_squid_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glow_stick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glowingobsidian
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glowstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:glowstone_dust
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:goat_horn
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:goat_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gold_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gold_ingot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gold_nugget
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gold_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_apple
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_axe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_boots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_carrot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_chestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_helmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_hoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_horse_armor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_leggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_pickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_rail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_shovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:golden_sword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:granite_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:grass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:grass_path
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gravel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gray_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gray_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gray_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gray_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:green_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:green_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:green_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:green_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:grindstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:guardian_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:gunpowder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hanging_roots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hard_glass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hard_glass_pane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hard_stained_glass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hard_stained_glass_pane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hardened_clay
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hay_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:heart_of_the_sea
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:heavy_weighted_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hoglin_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:honey_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:honey_bottle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:honeycomb
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:honeycomb_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:hopper_minecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:horse_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:husk_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ice_bomb
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:infested_deepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:info_update
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:info_update2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ink_sac
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:invisiblebedrock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_axe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_bars
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_boots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_chestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_helmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_hoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_horse_armor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_ingot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_leggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_nugget
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_pickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_shovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_sword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:iron_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.acacia_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.bed
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.beetroot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.birch_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.camera
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.campfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.cauldron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.chain
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.crimson_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.dark_oak_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.flower_pot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.frame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.glow_frame
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.hopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.iron_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.jungle_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.kelp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.nether_sprouts
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.nether_wart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.reeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.skull
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.soul_campfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.spruce_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.warped_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.wheat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:item.wooden_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jigsaw
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jukebox
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:jungle_wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:kelp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ladder
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lantern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lapis_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lapis_lazuli
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lapis_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:large_amethyst_bud
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lava
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lava_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lava_cauldron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lead
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leather
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leather_boots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leather_chestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leather_helmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leather_horse_armor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leather_leggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leaves
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:leaves2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lectern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lever
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_blue_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_blue_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_blue_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_blue_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_gray_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_gray_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_gray_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:light_weighted_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lightning_rod
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lime_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lime_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lime_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lime_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lingering_potion
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lit_blast_furnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lit_deepslate_redstone_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lit_furnace
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lit_pumpkin
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lit_redstone_lamp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lit_redstone_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lit_smoker
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:llama_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lodestone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:lodestone_compass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:log2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:loom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:magenta_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:magenta_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:magenta_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:magenta_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:magma
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:magma_cream
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:magma_cube_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:medicine
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:medium_amethyst_bud
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:melon_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:melon_seeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:melon_slice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:melon_stem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:milk_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:minecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mob_spawner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mojang_banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:monster_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mooshroom_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:moss_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:moss_carpet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mossy_cobblestone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mossy_cobblestone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mossy_stone_brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:movingblock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mule_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mushroom_stew
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_11
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_13
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_blocks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_cat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_chirp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_far
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_mall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_mellohi
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_pigstep
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_stal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_strad
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_wait
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:music_disc_ward
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mutton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:mycelium
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:name_tag
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nautilus_shell
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_brick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_brick_fence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_gold_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_sprouts
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_star
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_wart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:nether_wart_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherbrick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_axe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_boots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_chestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_helmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_hoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_ingot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_leggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_pickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_scrap
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_shovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherite_sword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherrack
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:netherreactor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:normal_stone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:noteblock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:npc_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oak_boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oak_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oak_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:observer
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:obsidian
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ocelot_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:orange_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:orange_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:orange_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:orange_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oxidized_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oxidized_cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oxidized_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oxidized_cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:oxidized_double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:packed_ice
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:painting
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:panda_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:paper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:parrot_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:phantom_membrane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:phantom_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pig_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:piglin_banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:piglin_brute_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:piglin_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pillager_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pink_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pink_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pink_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pink_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:piston
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pistonarmcollision
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:planks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:podzol
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pointed_dripstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:poisonous_potato
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polar_bear_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_andesite_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_basalt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_brick_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_brick_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_brick_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_blackstone_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_deepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_deepslate_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_deepslate_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_deepslate_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_deepslate_wall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_diorite_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:polished_granite_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:popped_chorus_fruit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:porkchop
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:portal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:potato
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:potatoes
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:potion
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:powder_snow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:powder_snow_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:powered_comparator
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:powered_repeater
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:prismarine
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:prismarine_bricks_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:prismarine_crystals
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:prismarine_shard
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:prismarine_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pufferfish
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pufferfish_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pufferfish_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pumpkin
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pumpkin_pie
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pumpkin_seeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:pumpkin_stem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:purple_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:purple_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:purple_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:purple_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:purpur_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:purpur_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:quartz
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:quartz_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:quartz_bricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:quartz_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:quartz_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rabbit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rabbit_foot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rabbit_hide
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rabbit_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rabbit_stew
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rapid_fertilizer
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:ravager_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:raw_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:raw_copper_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:raw_gold
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:raw_gold_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:raw_iron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:raw_iron_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:real_double_stone_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:real_double_stone_slab2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:real_double_stone_slab3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:real_double_stone_slab4
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_flower
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_mushroom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_mushroom_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_nether_brick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_nether_brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_sandstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:red_sandstone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:redstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:redstone_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:redstone_lamp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:redstone_ore
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:redstone_torch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:redstone_wire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:repeater
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:repeating_command_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:reserved6
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:respawn_anchor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:rotten_flesh
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:saddle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:salmon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:salmon_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:salmon_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sandstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sandstone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sapling
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:scaffolding
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sculk_sensor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:scute
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sea_pickle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:seagrass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sealantern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:shears
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sheep_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:shield
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:shroomlight
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:shulker_box
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:shulker_shell
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:shulker_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:silver_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:silverfish_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:skeleton_horse_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:skeleton_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:skull
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:skull_banner_pattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:slime
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:slime_ball
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:slime_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:small_amethyst_bud
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:small_dripleaf_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:smithing_table
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:smoker
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:smooth_basalt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:smooth_quartz_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:smooth_red_sandstone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:smooth_sandstone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:smooth_stone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:snow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:snow_layer
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:snowball
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:soul_campfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:soul_fire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:soul_lantern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:soul_sand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:soul_soil
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:soul_torch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sparkler
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spider_eye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spider_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:splash_potion
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sponge
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spore_blossom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_boat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spruce_wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:spyglass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:squid_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stained_glass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stained_glass_pane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stained_hardened_clay
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:standing_banner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sticky_piston
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stickypistonarmcollision
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_axe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_brick_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_hoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_pickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_shovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stone_sword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stonebrick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stonecutter
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stonecutter_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stray_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:strider_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:string
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_acacia_log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_birch_log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_crimson_hyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_crimson_stem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_dark_oak_log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_jungle_log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_oak_log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_spruce_log
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_warped_hyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:stripped_warped_stem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:structure_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:structure_void
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sugar
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sugar_cane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:suspicious_stew
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sweet_berries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:sweet_berry_bush
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tallgrass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:target
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tinted_glass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tnt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tnt_minecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:torch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:totem_of_undying
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:trapped_chest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:trident
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tripwire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tripwire_hook
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tropical_fish
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tropical_fish_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tropical_fish_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:tuff
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:turtle_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:turtle_helmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:turtle_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:twisting_vines
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:underwater_torch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:undyed_shulker_box
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:unknown
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:unlit_redstone_torch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:unpowered_comparator
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:unpowered_repeater
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:vex_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:villager_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:vindicator_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:vine
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wall_banner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wandering_trader_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_double_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_fence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_fence_gate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_fungus
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_fungus_on_a_stick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_hyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_nylium
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_planks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_roots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_standing_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_stem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_wall_sign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:warped_wart_block
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:water
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:water_bucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waterlily
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_exposed_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_exposed_cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_exposed_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_exposed_cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_exposed_double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_oxidized_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_oxidized_cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_oxidized_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_oxidized_cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_oxidized_double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_weathered_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_weathered_cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_weathered_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_weathered_cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:waxed_weathered_double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:weathered_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:weathered_cut_copper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:weathered_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:weathered_cut_copper_stairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:weathered_double_cut_copper_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:web
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:weeping_vines
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wheat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wheat_seeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:white_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:white_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:white_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:white_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:witch_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wither_rose
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wither_skeleton_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wolf_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wood
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_axe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_button
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_door
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_hoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_pickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_pressure_plate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_shovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_slab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wooden_sword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:wool
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:writable_book
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:written_book
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:yellow_candle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:yellow_candle_cake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:yellow_dye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:yellow_flower
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:yellow_glazed_terracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:zoglin_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:zombie_horse_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:zombie_pigman_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:zombie_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#minecraft:zombie_villager_spawn_egg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mobSpawner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mojangBannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#monsterEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mooshroomSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mossBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mossCarpet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mossyCobblestone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mossyCobblestoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mossyStoneBrickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#movingblock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#muleSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mushroomStew
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDisc11
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDisc13
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscBlocks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscCat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscChirp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscFar
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscMall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscMellohi
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscPigstep
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscStal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscStrad
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscWait
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#musicDiscWard
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mutton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#mycelium
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#nameTag
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#nautilusShell
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherbrick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherBrick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherBrickFence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherBrickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherGoldOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteAxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteBoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteChestplate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteHelmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteHoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteIngot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteLeggings
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheritePickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteScrap
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteShovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netheriteSword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherrack
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherreactor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherSprouts
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherStar
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherWart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#netherWartBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#normalStoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#noteblock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#npcSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oakBoat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oakSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oakStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#observer
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#obsidian
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ocelotSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#orangeCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#orangeCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#orangeDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#orangeGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oxidizedCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oxidizedCutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oxidizedCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oxidizedCutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#oxidizedDoubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#packedIce
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#painting
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pandaSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#paper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#parrotSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#phantomMembrane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#phantomSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#piglinBannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#piglinBruteSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#piglinSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pigSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pillagerSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pinkCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pinkCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pinkDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pinkGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#piston
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pistonarmcollision
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#planks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#podzol
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pointedDripstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#poisonousPotato
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polarBearSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedAndesiteStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBasalt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneBrickDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneBrickSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneBrickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneBrickWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstonePressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedBlackstoneWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedDeepslate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedDeepslateDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedDeepslateSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedDeepslateStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedDeepslateWall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedDioriteStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#polishedGraniteStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#poppedChorusFruit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#porkchop
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#portal
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#potato
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#potatoes
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#potion
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#powderSnow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#powderSnowBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#poweredComparator
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#poweredRepeater
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#prismarine
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#prismarineBricksStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#prismarineCrystals
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#prismarineShard
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#prismarineStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pufferfish
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pufferfishBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pufferfishSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pumpkin
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pumpkinPie
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pumpkinSeeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#pumpkinStem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#purpleCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#purpleCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#purpleDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#purpleGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#purpurBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#purpurStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#quartz
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#quartzBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#quartzBricks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#quartzOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#quartzStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rabbit
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rabbitFoot
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rabbitHide
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rabbitSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rabbitStew
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rail
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rapidFertilizer
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#ravagerSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rawCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rawCopperBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rawGold
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rawGoldBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rawIron
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rawIronBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#realDoubleStoneSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#realDoubleStoneSlab2
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#realDoubleStoneSlab3
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#realDoubleStoneSlab4
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redFlower
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redMushroom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redMushroomBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redNetherBrick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redNetherBrickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redSandstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redSandstoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redstoneBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redstoneLamp
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redstoneOre
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redstoneTorch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#redstoneWire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#repeater
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#repeatingCommandBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#reserved6
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#respawnAnchor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#rottenFlesh
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#saddle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#salmon
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#salmonBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#salmonSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sandstone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sandstoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sapling
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#scaffolding
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sculkSensor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#scute
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#seagrass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sealantern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#seaPickle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#shears
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sheepSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#shield
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#shroomlight
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#shulkerBox
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#shulkerShell
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#shulkerSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#silverfishSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#silverGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#skeletonHorseSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#skeletonSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#skull
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#skullBannerPattern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#slime
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#slimeBall
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#slimeSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smallAmethystBud
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smallDripleafBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smithingTable
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smoker
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smoothBasalt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smoothQuartzStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smoothRedSandstoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smoothSandstoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#smoothStone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#snow
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#snowball
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#snowLayer
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#soulCampfire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#soulFire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#soulLantern
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#soulSand
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#soulSoil
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#soulTorch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sparkler
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spiderEye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spiderSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#splashPotion
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sponge
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sporeBlossom
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceBoat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceFenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sprucePressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceStandingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spruceWallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#spyglass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#squidSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stainedGlass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stainedGlassPane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stainedHardenedClay
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#standingBanner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#standingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stickyPiston
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stickypistonarmcollision
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stone
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stoneAxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stonebrick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stoneBrickStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stoneButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stonecutter
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stonecutterBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stoneHoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stonePickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stonePressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stoneShovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stoneStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#stoneSword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#straySpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#striderSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#string
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedAcaciaLog
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedBirchLog
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedCrimsonHyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedCrimsonStem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedDarkOakLog
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedJungleLog
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedOakLog
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedSpruceLog
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedWarpedHyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#strippedWarpedStem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#structureBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#structureVoid
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sugar
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sugarCane
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#suspiciousStew
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sweetBerries
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#sweetBerryBush
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tallgrass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#target
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tintedGlass
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tnt
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tntMinecart
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#torch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#totemOfUndying
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#trapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#trappedChest
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#trident
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tripwire
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tripwireHook
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tropicalFish
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tropicalFishBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tropicalFishSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#tuff
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#turtleEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#turtleHelmet
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#turtleSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#twistingVines
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#underwaterTorch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#undyedShulkerBox
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#unknown
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#unlitRedstoneTorch
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#unpoweredComparator
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#unpoweredRepeater
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#vexSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#villagerSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#vindicatorSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#vine
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wallBanner
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wanderingTraderSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedDoubleSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedFence
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedFenceGate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedFungus
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedFungusOnAStick
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedHyphae
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedNylium
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedPlanks
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedRoots
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedStandingSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedStem
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedTrapdoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedWallSign
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#warpedWartBlock
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#water
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waterBucket
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waterlily
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedCutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedCutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedDoubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedExposedCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedExposedCutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedExposedCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedExposedCutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedExposedDoubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedOxidizedCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedOxidizedCutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedOxidizedCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedOxidizedCutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedOxidizedDoubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedWeatheredCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedWeatheredCutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedWeatheredCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedWeatheredCutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#waxedWeatheredDoubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#weatheredCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#weatheredCutCopper
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#weatheredCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#weatheredCutCopperStairs
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#weatheredDoubleCutCopperSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#web
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#weepingVines
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wheat
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wheatSeeds
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#whiteCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#whiteCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#whiteDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#whiteGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#witchSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#witherRose
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#witherSkeletonSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wolfSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wood
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenAxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenButton
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenDoor
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenHoe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenPickaxe
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenPressurePlate
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenShovel
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenSlab
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#woodenSword
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#wool
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#writableBook
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#writtenBook
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#yellowCandle
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#yellowCandleCake
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#yellowDye
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#yellowFlower
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#yellowGlazedTerracotta
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#zoglinSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#zombieHorseSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#zombiePigmanSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#zombieSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    /**
      * @name Items#zombieVillagerSpawnEgg
      * @type {module:Minecraft~ItemType}
      */
    

     constructor() {
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaBoat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaFenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaStandingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['acaciaWallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['activatorRail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['agentSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['air'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['allow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['amethystBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['amethystCluster'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['amethystShard'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ancientDebris'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['andesiteStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['anvil'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['apple'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['armorStand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['arrow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['axolotlBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['axolotlSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['azalea'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['azaleaLeaves'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['azaleaLeavesFlowered'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bakedPotato'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['balloon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bamboo'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bambooSapling'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['banner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['barrel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['barrier'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['basalt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['batSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beacon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bed'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bedrock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beef'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beehive'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beeNest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beeSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beetroot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beetrootSeeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['beetrootSoup'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bell'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bigDripleaf'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchBoat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchFenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchStandingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['birchWallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackstoneDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackstoneSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blackstoneWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blastFurnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blazePowder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blazeRod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blazeSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bleach'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blueCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blueCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blueDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blueGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['blueIce'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['boneBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['boneMeal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['book'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bookshelf'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['borderBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bordureIndentedBannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bowl'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bread'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brewingStand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brewingstandblock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brickBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brownCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brownCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brownDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brownGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brownMushroom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['brownMushroomBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bubbleColumn'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['buddingAmethyst'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cactus'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['calcite'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['camera'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['campfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['candleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['carpet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['carrot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['carrotOnAStick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['carrots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cartographyTable'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['carvedPumpkin'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['catSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cauldron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['caveSpiderSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['caveVines'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['caveVinesBodyWithBerries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['caveVinesHeadWithBerries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chain'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chainCommandBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chainmailBoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chainmailChestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chainmailHelmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chainmailLeggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['charcoal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chemicalHeat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chemistryTable'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chestMinecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chicken'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chickenSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chiseledDeepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chiseledNetherBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chiseledPolishedBlackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chorusFlower'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chorusFruit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['chorusPlant'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['clay'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['clayBall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['clock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coalBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coalOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cobbledDeepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cobbledDeepslateDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cobbledDeepslateSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cobbledDeepslateStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cobbledDeepslateWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cobblestone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cobblestoneWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cocoa'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cocoaBeans'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['codBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['codSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coloredTorchBp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coloredTorchRg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['commandBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['commandBlockMinecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['comparator'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['compass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['composter'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['compound'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['concrete'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['concretePowder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['conduit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookedBeef'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookedChicken'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookedCod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookedMutton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookedPorkchop'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookedRabbit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookedSalmon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cookie'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['copperBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['copperIngot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['copperOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coral'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coralBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coralFan'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coralFanDead'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coralFanHang'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coralFanHang2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['coralFanHang3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cowSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crackedDeepslateBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crackedDeepslateTiles'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crackedNetherBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crackedPolishedBlackstoneBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['craftingTable'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['creeperBannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['creeperSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonFence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonFenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonFungus'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonHyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonNylium'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonPlanks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonRoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonStandingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonStem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crimsonWallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['crossbow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cryingObsidian'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cyanCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cyanCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cyanDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['cyanGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakBoat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakFenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkoakStandingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkOakTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkoakWallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['darkPrismarineStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['daylightDetector'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['daylightDetectorInverted'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deadbush'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['debugStick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateBrickDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateBrickSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateBrickWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateCoalOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateCopperOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateDiamondOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateEmeraldOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateGoldOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateIronOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateLapisOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateRedstoneOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateTileDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateTiles'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateTileSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateTileStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deepslateTileWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['deny'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['detectorRail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamond'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondAxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondBoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondChestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondHelmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondHoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondHorseArmor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondLeggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondPickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondShovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['diamondSword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dioriteStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dirt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dirtWithRoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dispenser'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dolphinSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['donkeySpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['doubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['doublePlant'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['doubleStoneSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['doubleStoneSlab2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['doubleStoneSlab3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['doubleStoneSlab4'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['doubleWoodenSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dragonBreath'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dragonEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['driedKelp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['driedKelpBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dripstoneBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dropper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['drownedSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['elderGuardianSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element0'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element1'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element10'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element100'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element101'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element102'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element103'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element104'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element105'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element106'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element107'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element108'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element109'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element11'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element110'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element111'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element112'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element113'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element114'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element115'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element116'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element117'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element118'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element12'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element13'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element14'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element15'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element16'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element17'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element18'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element19'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element20'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element21'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element22'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element23'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element24'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element25'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element26'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element27'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element28'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element29'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element30'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element31'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element32'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element33'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element34'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element35'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element36'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element37'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element38'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element39'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element4'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element40'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element41'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element42'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element43'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element44'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element45'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element46'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element47'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element48'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element49'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element5'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element50'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element51'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element52'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element53'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element54'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element55'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element56'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element57'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element58'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element59'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element6'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element60'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element61'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element62'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element63'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element64'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element65'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element66'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element67'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element68'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element69'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element7'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element70'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element71'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element72'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element73'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element74'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element75'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element76'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element77'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element78'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element79'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element8'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element80'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element81'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element82'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element83'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element84'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element85'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element86'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element87'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element88'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element89'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element9'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element90'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element91'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element92'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element93'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element94'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element95'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element96'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element97'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element98'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['element99'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['elytra'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['emerald'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['emeraldBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['emeraldOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['emptyMap'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['enchantedBook'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['enchantedGoldenApple'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['enchantingTable'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endCrystal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['enderChest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['enderEye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endermanSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endermiteSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['enderPearl'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endGateway'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endPortal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endPortalFrame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endRod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['endStone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['evokerSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['experienceBottle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['exposedCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['exposedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['exposedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['exposedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['exposedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['farmland'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['feather'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fermentedSpiderEye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fieldMasonedBannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['filledMap'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fireCharge'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fireworkRocket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fireworkStar'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fishingRod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['fletchingTable'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['flint'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['flintAndSteel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['flowerBannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['floweringAzalea'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['flowerPot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['flowingLava'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['flowingWater'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['foxSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['frame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['frostedIce'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['furnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ghastSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ghastTear'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['gildedBlackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glassBottle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glassPane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glisteringMelonSlice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowBerries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowFrame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowingobsidian'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowInkSac'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowLichen'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowSquidSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowStick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['glowstoneDust'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goatHorn'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goatSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenApple'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenAxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenBoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenCarrot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenChestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenHelmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenHoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenHorseArmor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenLeggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenPickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenRail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenShovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldenSword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldIngot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldNugget'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['goldOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['graniteStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['grass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['grassPath'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['gravel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['grayCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['grayCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['grayDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['grayGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['greenCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['greenCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['greenDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['greenGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['grindstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['guardianSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['gunpowder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hangingRoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hardenedClay'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hardGlass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hardGlassPane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hardStainedGlass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hardStainedGlassPane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hayBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['heartOfTheSea'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['heavyWeightedPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hoglinSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['honeyBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['honeyBottle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['honeycomb'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['honeycombBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['hopperMinecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['horseSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['huskSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['iceBomb'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['infestedDeepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['infoUpdate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['infoUpdate2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['inkSac'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['invisiblebedrock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironAxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironBars'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironBoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironChestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironHelmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironHoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironHorseArmor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironIngot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironLeggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironNugget'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironPickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironShovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironSword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ironTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.acaciaDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.bed'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.beetroot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.birchDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.camera'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.campfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.cauldron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.chain'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.crimsonDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.darkOakDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.flowerPot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.frame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.glowFrame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.hopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.ironDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.jungleDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.kelp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.netherSprouts'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.netherWart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.reeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.skull'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.soulCampfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.spruceDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.warpedDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.wheat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['item.woodenDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jigsaw'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jukebox'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleBoat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleFenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['junglePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleStandingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['jungleWallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['kelp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ladder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lantern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lapisBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lapisLazuli'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lapisOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['largeAmethystBud'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lava'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lavaBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lavaCauldron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lead'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leather'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leatherBoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leatherChestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leatherHelmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leatherHorseArmor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leatherLeggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leaves'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['leaves2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lectern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lever'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightBlueCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightBlueCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightBlueDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightBlueGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightGrayCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightGrayCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightGrayDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightningRod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lightWeightedPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['limeCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['limeCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['limeDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['limeGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lingeringPotion'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['litBlastFurnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['litDeepslateRedstoneOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['litFurnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['litPumpkin'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['litRedstoneLamp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['litRedstoneOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['litSmoker'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['llamaSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lodestone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['lodestoneCompass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['log2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['loom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['magentaCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['magentaCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['magentaDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['magentaGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['magma'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['magmaCream'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['magmaCubeSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['medicine'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mediumAmethystBud'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['melonBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['melonSeeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['melonSlice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['melonStem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['milkBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:acacia_wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:activator_rail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:agent_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:air'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:allow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:amethyst_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:amethyst_cluster'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:amethyst_shard'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ancient_debris'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:andesite_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:anvil'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:apple'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:armor_stand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:arrow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:axolotl_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:axolotl_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:azalea'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:azalea_leaves'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:azalea_leaves_flowered'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:baked_potato'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:balloon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bamboo'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bamboo_sapling'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:banner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:barrel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:barrier'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:basalt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bat_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:beacon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bed'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bedrock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bee_nest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bee_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:beef'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:beehive'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:beetroot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:beetroot_seeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:beetroot_soup'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bell'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:big_dripleaf'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:birch_wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:black_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:black_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:black_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:black_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blackstone_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blackstone_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blackstone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blackstone_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blast_furnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blaze_powder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blaze_rod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blaze_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bleach'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blue_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blue_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blue_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blue_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:blue_ice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bone_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bone_meal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:book'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bookshelf'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:border_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bordure_indented_banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bowl'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bread'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brewing_stand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brewingstandblock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brick_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brown_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brown_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brown_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brown_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brown_mushroom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:brown_mushroom_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bubble_column'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:budding_amethyst'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cactus'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:calcite'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:camera'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:campfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:carpet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:carrot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:carrot_on_a_stick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:carrots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cartography_table'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:carved_pumpkin'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cat_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cauldron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cave_spider_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cave_vines'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cave_vines_body_with_berries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cave_vines_head_with_berries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chain'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chain_command_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chainmail_boots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chainmail_chestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chainmail_helmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chainmail_leggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:charcoal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chemical_heat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chemistry_table'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chest_minecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chicken'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chicken_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chiseled_deepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chiseled_nether_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chiseled_polished_blackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chorus_flower'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chorus_fruit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:chorus_plant'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:clay'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:clay_ball'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:clock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coal_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coal_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cobbled_deepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cobbled_deepslate_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cobbled_deepslate_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cobbled_deepslate_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cobbled_deepslate_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cobblestone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cobblestone_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cocoa'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cocoa_beans'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cod_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cod_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:colored_torch_bp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:colored_torch_rg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:command_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:command_block_minecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:comparator'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:compass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:composter'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:compound'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:concrete'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:concrete_powder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:conduit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cooked_beef'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cooked_chicken'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cooked_cod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cooked_mutton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cooked_porkchop'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cooked_rabbit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cooked_salmon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cookie'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:copper_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:copper_ingot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:copper_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coral'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coral_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coral_fan'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coral_fan_dead'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coral_fan_hang'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coral_fan_hang2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:coral_fan_hang3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cow_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cracked_deepslate_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cracked_deepslate_tiles'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cracked_nether_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cracked_polished_blackstone_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crafting_table'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:creeper_banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:creeper_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_fence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_fungus'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_hyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_nylium'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_planks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_roots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_stem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crimson_wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crossbow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:crying_obsidian'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cyan_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cyan_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cyan_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:cyan_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_oak_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dark_prismarine_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:darkoak_standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:darkoak_wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:daylight_detector'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:daylight_detector_inverted'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deadbush'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:debug_stick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_brick_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_brick_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_brick_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_coal_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_copper_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_diamond_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_emerald_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_gold_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_iron_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_lapis_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_redstone_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_tile_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_tile_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_tile_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_tile_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deepslate_tiles'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:deny'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:detector_rail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_axe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_boots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_chestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_helmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_hoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_horse_armor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_leggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_pickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_shovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diamond_sword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:diorite_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dirt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dirt_with_roots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dispenser'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dolphin_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:donkey_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:double_plant'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:double_stone_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:double_stone_slab2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:double_stone_slab3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:double_stone_slab4'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:double_wooden_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dragon_breath'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dragon_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dried_kelp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dried_kelp_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dripstone_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dropper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:drowned_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:elder_guardian_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_0'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_1'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_10'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_100'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_101'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_102'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_103'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_104'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_105'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_106'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_107'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_108'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_109'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_11'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_110'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_111'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_112'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_113'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_114'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_115'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_116'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_117'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_118'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_12'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_13'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_14'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_15'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_16'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_17'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_18'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_19'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_20'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_21'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_22'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_23'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_24'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_25'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_26'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_27'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_28'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_29'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_30'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_31'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_32'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_33'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_34'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_35'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_36'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_37'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_38'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_39'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_4'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_40'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_41'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_42'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_43'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_44'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_45'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_46'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_47'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_48'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_49'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_5'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_50'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_51'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_52'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_53'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_54'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_55'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_56'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_57'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_58'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_59'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_6'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_60'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_61'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_62'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_63'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_64'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_65'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_66'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_67'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_68'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_69'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_7'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_70'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_71'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_72'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_73'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_74'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_75'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_76'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_77'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_78'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_79'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_8'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_80'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_81'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_82'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_83'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_84'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_85'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_86'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_87'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_88'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_89'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_9'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_90'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_91'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_92'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_93'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_94'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_95'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_96'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_97'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_98'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:element_99'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:elytra'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:emerald'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:emerald_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:emerald_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:empty_map'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:enchanted_book'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:enchanted_golden_apple'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:enchanting_table'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_crystal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_gateway'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_portal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_portal_frame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_rod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:end_stone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ender_chest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ender_eye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ender_pearl'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:enderman_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:endermite_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:evoker_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:experience_bottle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:exposed_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:exposed_cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:exposed_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:exposed_cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:exposed_double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:farmland'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:feather'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fermented_spider_eye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:field_masoned_banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:filled_map'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fire_charge'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:firework_rocket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:firework_star'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fishing_rod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fletching_table'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:flint'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:flint_and_steel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:flower_banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:flower_pot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:flowering_azalea'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:flowing_lava'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:flowing_water'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:fox_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:frame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:frosted_ice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:furnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ghast_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ghast_tear'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gilded_blackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glass_bottle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glass_pane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glistering_melon_slice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glow_berries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glow_frame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glow_ink_sac'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glow_lichen'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glow_squid_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glow_stick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glowingobsidian'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glowstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:glowstone_dust'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:goat_horn'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:goat_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gold_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gold_ingot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gold_nugget'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gold_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_apple'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_axe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_boots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_carrot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_chestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_helmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_hoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_horse_armor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_leggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_pickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_rail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_shovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:golden_sword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:granite_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:grass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:grass_path'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gravel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gray_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gray_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gray_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gray_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:green_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:green_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:green_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:green_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:grindstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:guardian_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:gunpowder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hanging_roots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hard_glass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hard_glass_pane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hard_stained_glass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hard_stained_glass_pane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hardened_clay'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hay_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:heart_of_the_sea'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:heavy_weighted_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hoglin_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:honey_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:honey_bottle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:honeycomb'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:honeycomb_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:hopper_minecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:horse_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:husk_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ice_bomb'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:infested_deepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:info_update'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:info_update2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ink_sac'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:invisiblebedrock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_axe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_bars'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_boots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_chestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_helmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_hoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_horse_armor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_ingot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_leggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_nugget'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_pickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_shovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_sword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:iron_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.acacia_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.bed'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.beetroot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.birch_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.camera'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.campfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.cauldron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.chain'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.crimson_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.dark_oak_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.flower_pot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.frame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.glow_frame'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.hopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.iron_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.jungle_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.kelp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.nether_sprouts'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.nether_wart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.reeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.skull'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.soul_campfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.spruce_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.warped_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.wheat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:item.wooden_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jigsaw'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jukebox'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:jungle_wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:kelp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ladder'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lantern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lapis_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lapis_lazuli'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lapis_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:large_amethyst_bud'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lava'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lava_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lava_cauldron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lead'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leather'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leather_boots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leather_chestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leather_helmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leather_horse_armor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leather_leggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leaves'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:leaves2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lectern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lever'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_blue_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_blue_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_blue_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_blue_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_gray_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_gray_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_gray_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:light_weighted_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lightning_rod'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lime_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lime_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lime_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lime_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lingering_potion'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lit_blast_furnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lit_deepslate_redstone_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lit_furnace'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lit_pumpkin'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lit_redstone_lamp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lit_redstone_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lit_smoker'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:llama_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lodestone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:lodestone_compass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:log2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:loom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:magenta_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:magenta_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:magenta_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:magenta_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:magma'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:magma_cream'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:magma_cube_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:medicine'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:medium_amethyst_bud'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:melon_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:melon_seeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:melon_slice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:melon_stem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:milk_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:minecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mob_spawner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mojang_banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:monster_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mooshroom_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:moss_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:moss_carpet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mossy_cobblestone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mossy_cobblestone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mossy_stone_brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:movingblock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mule_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mushroom_stew'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_11'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_13'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_blocks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_cat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_chirp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_far'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_mall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_mellohi'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_pigstep'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_stal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_strad'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_wait'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:music_disc_ward'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mutton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:mycelium'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:name_tag'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nautilus_shell'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_brick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_brick_fence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_gold_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_sprouts'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_star'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_wart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:nether_wart_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherbrick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_axe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_boots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_chestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_helmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_hoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_ingot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_leggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_pickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_scrap'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_shovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherite_sword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherrack'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:netherreactor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:normal_stone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:noteblock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:npc_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oak_boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oak_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oak_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:observer'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:obsidian'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ocelot_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:orange_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:orange_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:orange_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:orange_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oxidized_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oxidized_cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oxidized_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oxidized_cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:oxidized_double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:packed_ice'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:painting'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:panda_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:paper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:parrot_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:phantom_membrane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:phantom_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pig_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:piglin_banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:piglin_brute_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:piglin_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pillager_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pink_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pink_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pink_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pink_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:piston'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pistonarmcollision'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:planks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:podzol'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pointed_dripstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:poisonous_potato'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polar_bear_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_andesite_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_basalt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_brick_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_brick_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_brick_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_blackstone_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_deepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_deepslate_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_deepslate_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_deepslate_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_deepslate_wall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_diorite_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:polished_granite_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:popped_chorus_fruit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:porkchop'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:portal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:potato'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:potatoes'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:potion'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:powder_snow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:powder_snow_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:powered_comparator'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:powered_repeater'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:prismarine'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:prismarine_bricks_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:prismarine_crystals'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:prismarine_shard'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:prismarine_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pufferfish'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pufferfish_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pufferfish_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pumpkin'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pumpkin_pie'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pumpkin_seeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:pumpkin_stem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:purple_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:purple_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:purple_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:purple_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:purpur_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:purpur_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:quartz'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:quartz_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:quartz_bricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:quartz_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:quartz_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rabbit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rabbit_foot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rabbit_hide'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rabbit_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rabbit_stew'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rapid_fertilizer'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:ravager_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:raw_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:raw_copper_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:raw_gold'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:raw_gold_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:raw_iron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:raw_iron_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:real_double_stone_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:real_double_stone_slab2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:real_double_stone_slab3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:real_double_stone_slab4'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_flower'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_mushroom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_mushroom_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_nether_brick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_nether_brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_sandstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:red_sandstone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:redstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:redstone_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:redstone_lamp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:redstone_ore'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:redstone_torch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:redstone_wire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:repeater'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:repeating_command_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:reserved6'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:respawn_anchor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:rotten_flesh'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:saddle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:salmon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:salmon_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:salmon_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sandstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sandstone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sapling'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:scaffolding'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sculk_sensor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:scute'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sea_pickle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:seagrass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sealantern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:shears'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sheep_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:shield'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:shroomlight'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:shulker_box'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:shulker_shell'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:shulker_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:silver_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:silverfish_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:skeleton_horse_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:skeleton_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:skull'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:skull_banner_pattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:slime'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:slime_ball'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:slime_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:small_amethyst_bud'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:small_dripleaf_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:smithing_table'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:smoker'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:smooth_basalt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:smooth_quartz_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:smooth_red_sandstone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:smooth_sandstone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:smooth_stone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:snow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:snow_layer'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:snowball'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:soul_campfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:soul_fire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:soul_lantern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:soul_sand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:soul_soil'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:soul_torch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sparkler'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spider_eye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spider_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:splash_potion'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sponge'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spore_blossom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_boat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spruce_wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:spyglass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:squid_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stained_glass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stained_glass_pane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stained_hardened_clay'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:standing_banner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sticky_piston'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stickypistonarmcollision'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_axe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_brick_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_hoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_pickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_shovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stone_sword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stonebrick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stonecutter'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stonecutter_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stray_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:strider_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:string'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_acacia_log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_birch_log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_crimson_hyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_crimson_stem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_dark_oak_log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_jungle_log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_oak_log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_spruce_log'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_warped_hyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:stripped_warped_stem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:structure_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:structure_void'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sugar'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sugar_cane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:suspicious_stew'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sweet_berries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:sweet_berry_bush'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tallgrass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:target'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tinted_glass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tnt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tnt_minecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:torch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:totem_of_undying'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:trapped_chest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:trident'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tripwire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tripwire_hook'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tropical_fish'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tropical_fish_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tropical_fish_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:tuff'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:turtle_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:turtle_helmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:turtle_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:twisting_vines'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:underwater_torch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:undyed_shulker_box'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:unknown'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:unlit_redstone_torch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:unpowered_comparator'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:unpowered_repeater'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:vex_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:villager_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:vindicator_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:vine'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wall_banner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wandering_trader_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_double_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_fence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_fence_gate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_fungus'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_fungus_on_a_stick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_hyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_nylium'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_planks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_roots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_standing_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_stem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_wall_sign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:warped_wart_block'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:water'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:water_bucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waterlily'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_exposed_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_exposed_cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_exposed_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_exposed_cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_exposed_double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_oxidized_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_oxidized_cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_oxidized_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_oxidized_cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_oxidized_double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_weathered_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_weathered_cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_weathered_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_weathered_cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:waxed_weathered_double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:weathered_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:weathered_cut_copper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:weathered_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:weathered_cut_copper_stairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:weathered_double_cut_copper_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:web'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:weeping_vines'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wheat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wheat_seeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:white_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:white_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:white_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:white_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:witch_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wither_rose'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wither_skeleton_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wolf_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wood'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_axe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_button'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_door'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_hoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_pickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_pressure_plate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_shovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_slab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wooden_sword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:wool'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:writable_book'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:written_book'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:yellow_candle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:yellow_candle_cake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:yellow_dye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:yellow_flower'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:yellow_glazed_terracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:zoglin_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:zombie_horse_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:zombie_pigman_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:zombie_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['minecraft:zombie_villager_spawn_egg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mobSpawner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mojangBannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['monsterEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mooshroomSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mossBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mossCarpet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mossyCobblestone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mossyCobblestoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mossyStoneBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['movingblock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['muleSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mushroomStew'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDisc11'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDisc13'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscBlocks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscCat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscChirp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscFar'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscMall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscMellohi'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscPigstep'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscStal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscStrad'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscWait'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['musicDiscWard'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mutton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['mycelium'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['nameTag'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['nautilusShell'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherbrick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherBrick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherBrickFence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherGoldOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteAxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteBoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteChestplate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteHelmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteHoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteIngot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteLeggings'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheritePickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteScrap'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteShovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netheriteSword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherrack'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherreactor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherSprouts'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherStar'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherWart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['netherWartBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['normalStoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['noteblock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['npcSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oakBoat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oakSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oakStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['observer'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['obsidian'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ocelotSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['orangeCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['orangeCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['orangeDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['orangeGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oxidizedCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oxidizedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oxidizedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oxidizedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['oxidizedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['packedIce'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['painting'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pandaSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['paper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['parrotSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['phantomMembrane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['phantomSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['piglinBannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['piglinBruteSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['piglinSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pigSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pillagerSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pinkCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pinkCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pinkDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pinkGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['piston'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pistonarmcollision'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['planks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['podzol'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pointedDripstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['poisonousPotato'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polarBearSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedAndesiteStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBasalt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneBrickDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneBrickSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneBrickWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstonePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedBlackstoneWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedDeepslate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedDeepslateDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedDeepslateSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedDeepslateStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedDeepslateWall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedDioriteStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['polishedGraniteStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['poppedChorusFruit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['porkchop'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['portal'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['potato'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['potatoes'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['potion'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['powderSnow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['powderSnowBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['poweredComparator'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['poweredRepeater'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['prismarine'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['prismarineBricksStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['prismarineCrystals'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['prismarineShard'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['prismarineStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pufferfish'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pufferfishBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pufferfishSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pumpkin'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pumpkinPie'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pumpkinSeeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['pumpkinStem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['purpleCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['purpleCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['purpleDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['purpleGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['purpurBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['purpurStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['quartz'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['quartzBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['quartzBricks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['quartzOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['quartzStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rabbit'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rabbitFoot'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rabbitHide'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rabbitSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rabbitStew'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rail'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rapidFertilizer'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['ravagerSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rawCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rawCopperBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rawGold'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rawGoldBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rawIron'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rawIronBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['realDoubleStoneSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['realDoubleStoneSlab2'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['realDoubleStoneSlab3'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['realDoubleStoneSlab4'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redFlower'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redMushroom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redMushroomBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redNetherBrick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redNetherBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redSandstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redSandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redstoneBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redstoneLamp'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redstoneOre'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redstoneTorch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['redstoneWire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['repeater'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['repeatingCommandBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['reserved6'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['respawnAnchor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['rottenFlesh'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['saddle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['salmon'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['salmonBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['salmonSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sandstone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sapling'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['scaffolding'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sculkSensor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['scute'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['seagrass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sealantern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['seaPickle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['shears'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sheepSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['shield'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['shroomlight'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['shulkerBox'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['shulkerShell'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['shulkerSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['silverfishSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['silverGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['skeletonHorseSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['skeletonSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['skull'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['skullBannerPattern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['slime'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['slimeBall'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['slimeSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smallAmethystBud'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smallDripleafBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smithingTable'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smoker'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smoothBasalt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smoothQuartzStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smoothRedSandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smoothSandstoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['smoothStone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['snow'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['snowball'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['snowLayer'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['soulCampfire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['soulFire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['soulLantern'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['soulSand'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['soulSoil'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['soulTorch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sparkler'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spiderEye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spiderSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['splashPotion'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sponge'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sporeBlossom'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceBoat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceFenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sprucePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceStandingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spruceWallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['spyglass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['squidSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stainedGlass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stainedGlassPane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stainedHardenedClay'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['standingBanner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['standingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stickyPiston'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stickypistonarmcollision'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stone'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stoneAxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stonebrick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stoneBrickStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stoneButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stonecutter'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stonecutterBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stoneHoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stonePickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stonePressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stoneShovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stoneStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['stoneSword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['straySpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['striderSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['string'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedAcaciaLog'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedBirchLog'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedCrimsonHyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedCrimsonStem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedDarkOakLog'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedJungleLog'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedOakLog'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedSpruceLog'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedWarpedHyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['strippedWarpedStem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['structureBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['structureVoid'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sugar'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sugarCane'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['suspiciousStew'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sweetBerries'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['sweetBerryBush'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tallgrass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['target'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tintedGlass'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tnt'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tntMinecart'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['torch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['totemOfUndying'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['trapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['trappedChest'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['trident'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tripwire'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tripwireHook'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tropicalFish'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tropicalFishBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tropicalFishSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['tuff'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['turtleEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['turtleHelmet'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['turtleSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['twistingVines'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['underwaterTorch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['undyedShulkerBox'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['unknown'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['unlitRedstoneTorch'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['unpoweredComparator'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['unpoweredRepeater'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['vexSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['villagerSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['vindicatorSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['vine'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wallBanner'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wanderingTraderSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedDoubleSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedFence'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedFenceGate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedFungus'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedFungusOnAStick'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedHyphae'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedNylium'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedPlanks'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedRoots'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedStandingSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedStem'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedTrapdoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedWallSign'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['warpedWartBlock'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['water'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waterBucket'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waterlily'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedExposedCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedExposedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedExposedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedExposedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedExposedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedOxidizedCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedOxidizedCutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedOxidizedCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedOxidizedCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedOxidizedDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedWeatheredCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedWeatheredCutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedWeatheredCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedWeatheredCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['waxedWeatheredDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['weatheredCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['weatheredCutCopper'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['weatheredCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['weatheredCutCopperStairs'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['weatheredDoubleCutCopperSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['web'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['weepingVines'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wheat'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wheatSeeds'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['whiteCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['whiteCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['whiteDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['whiteGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['witchSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['witherRose'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['witherSkeletonSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wolfSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wood'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenAxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenButton'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenDoor'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenHoe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenPickaxe'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenPressurePlate'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenShovel'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenSlab'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['woodenSword'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['wool'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['writableBook'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['writtenBook'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['yellowCandle'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['yellowCandleCake'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['yellowDye'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['yellowFlower'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['yellowGlazedTerracotta'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['zoglinSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['zombieHorseSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['zombiePigmanSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['zombieSpawnEgg'];
      /**
        * 
        * @type {module:Minecraft~ItemType}
        */
      this['zombieVillagerSpawnEgg'];
    }
  }
  
/** 
 * Defines a collection of items.
 * @class
 */
class ItemStack {
    /**
      * Number of the items in the stack. Valid values range between 0 and 64.
      * @name ItemStack#amount
      * @type {number}
      */
    /**
      * A data value used to configure alternate states of the item.
      * @name ItemStack#data
      * @type {number}
      */
    /**
      * Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.
      * @name ItemStack#id
      * @type {string}
      */
    
/**
  *
  * @constructor
  * @param {module:Minecraft~ItemType} itemType -  
  * @param {number} amount -  
  * @param {number} data -  
  * @returns {module:Minecraft~ItemStack}
  */
constructor (itemType, amount, data) {
    /**
      * Number of the items in the stack. Valid values range between 0 and 64.
      * @type {number}
      */
    this['amount'];
    /**
      * A data value used to configure alternate states of the item.
      * @type {number}
      */
    this['data'];
    /**
      * Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.
      * @type {string}
      */
    this['id'];
}

  }
  
/** 
 * Represents the type of an item - for example, Wool.
 * @hideconstructor
 * @class
 */
class ItemType {
    
/**
  * Returns the identifier of the item type - for example, 'apple'.
  *
  * @method
  * @returns {string}
  */
getName () {
}

     constructor() {
    }
  }
  
/** 
 * Defines the base movement speed in lava of this entity.
 * @hideconstructor
 * @class
 */
class LavaMovement {
    /**
      * Read-only. Returns the current value of movement speed on lava for the entity.
      * @name LavaMovement#current
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:lava_movement.
      * @name LavaMovement#id
      * @type {string}
      */
    /**
      * Value for movement speed on lava as defined through entity components.
      * @name LavaMovement#value
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Resets the current movement speed on lava for the entity to its default value.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToDefaultValue () {
}
/**
  * Resets the movement speed on lava to the maximum value for the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMaxValue () {
}
/**
  * Resets the movement speed on lava speed to the minimum value.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMinValue () {
}
/**
  * Sets the current value of movement speed on lava for the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
setCurrent () {
}

     constructor() {
      /**
        * Read-only. Returns the current value of movement speed on lava for the entity.
        * 
        * @type {number}
        */
      this['current'];
      /**
        * Identifier of this component. Should always be minecraft:lava_movement.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Value for movement speed on lava as defined through entity components.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
 * @hideconstructor
 * @class
 */
class Leashable {
    /**
      * Identifier of this component. Should always be minecraft:leashable.
      * @name Leashable#id
      * @type {string}
      */
    /**
      * Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
      * @name Leashable#softDistance
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Leashes this entity to another entity.
  *
  * @method
  * @param {module:Minecraft~Entity} leashHolder - The entity to leash this entity to. 
  * @throws This function can throw errors.
  */
leash (leashHolder) {
}
/**
  * Unleashes this entity if it is leashed to another entity.
  *
  * @method
  * @throws This function can throw errors.
  */
unleash () {
}

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:leashable.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
        * 
        * @type {number}
        */
      this['softDistance'];
    }
  }
  
/** 
 * Contains a location description that is useful for entities and other items. X, Y, and Z can contain decimal fractions. For integer-based locations useful for blocks, see {@link Minecraft.BlockLocation}.
 * @class
 */
class Location {
    /**
      * X component of this location.
      * @name Location#x
      * @type {number}
      */
    /**
      * Y component of this location.
      * @name Location#y
      * @type {number}
      */
    /**
      * Z component of this location.
      * @name Location#z
      * @type {number}
      */
    
/**
  *
  * @constructor
  * @param {number} x -  
  * @param {number} y -  
  * @param {number} z -  
  * @returns {module:Minecraft~Location}
  */
constructor (x, y, z) {
    /**
      * X component of this location.
      * @type {number}
      */
    this['x'];
    /**
      * Y component of this location.
      * @type {number}
      */
    this['y'];
    /**
      * Z component of this location.
      * @type {number}
      */
    this['z'];
}
/**
  * Compares this Location and another Location to one another.
  *
  * @method
  * @param {module:Minecraft~Location} other - Other location to compare this Location to. 
  * @returns {boolean}
  */
equals (other) {
}
/**
  * Determines whether or not two Locations are considered to be near each other.
  *
  * @method
  * @param {module:Minecraft~Location} other - Other Location to compare this Location to. 
  * @param {number} epsilon - Maximum distance that the Locations can be from each other to be considered nearby. 
  * @returns {boolean}
  */
isNear (other, epsilon) {
}

  }
  
/** 
 * Contains options for taming a rideable entity based on the entity that mounts it.
 * @hideconstructor
 * @class
 */
class MountTaming {
    /**
      * Identifier of this component. Should always be minecraft:mount_taming.
      * @name MountTaming#id
      * @type {string}
      */
    
/**
  * Sets this rideable entity as tamed.
  *
  * @method
  * @param {boolean} showParticles - Whether to show effect particles when this entity is tamed. 
  * @throws This function can throw errors.
  */
setTamed (showParticles) {
}

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:mount_taming.
        * 
        * @type {string}
        */
      this['id'];
    }
  }
  
/** 
 * Defines the general movement speed of this entity.
 * @hideconstructor
 * @class
 */
class Movement {
    /**
      * Read-only. Returns the current value of default movement speed for the entity.
      * @name Movement#current
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:movement.
      * @name Movement#id
      * @type {string}
      */
    /**
      * Value for default movement speed as defined through entity components.
      * @name Movement#value
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Resets the current default movement speed value for the entity to the default value.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToDefaultValue () {
}
/**
  * Resets the default movement speed to the maximum value for the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMaxValue () {
}
/**
  * Resets the default movement speed to the minimum value.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMinValue () {
}
/**
  * Sets the current value of default movement speed for the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
setCurrent () {
}

     constructor() {
      /**
        * Read-only. Returns the current value of default movement speed for the entity.
        * 
        * @type {number}
        */
      this['current'];
      /**
        * Identifier of this component. Should always be minecraft:movement.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Value for default movement speed as defined through entity components.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * When added, this movement control allows the mob to swim in water and walk on land.
 * @hideconstructor
 * @class
 */
class MovementAmphibious {
    /**
      * Identifier of this component. Should always be minecraft:movement.amphibious.
      * @name MovementAmphibious#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementAmphibious#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.amphibious.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
    }
  }
  
/** 
 * This component accents the movement of an entity.
 * @hideconstructor
 * @class
 */
class MovementBasic {
    /**
      * Identifier of this component. Should always be minecraft:movement.basic.
      * @name MovementBasic#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementBasic#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.basic.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
    }
  }
  
/** 
 * When added, this move control causes the mob to fly.
 * @hideconstructor
 * @class
 */
class MovementFly {
    /**
      * Identifier of this component. Should always be minecraft:movement.fly.
      * @name MovementFly#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementFly#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.fly.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
    }
  }
  
/** 
 * When added, this move control allows a mob to fly, swim, climb, etc.
 * @hideconstructor
 * @class
 */
class MovementGeneric {
    /**
      * Identifier of this component. Should always be minecraft:movement.generic.
      * @name MovementGeneric#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementGeneric#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.generic.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
    }
  }
  
/** 
 * When added, this movement control allows the mob to glide.
 * @hideconstructor
 * @class
 */
class MovementGlide {
    /**
      * Identifier of this component. Should always be minecraft:movement.glide.
      * @name MovementGlide#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementGlide#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Speed in effect when the entity is turning.
      * @name MovementGlide#speedWhenTurning
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Start speed during a glide.
      * @name MovementGlide#startSpeed
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.glide.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
      /**
        * Speed in effect when the entity is turning.
        * 
        * @type {number}
        */
      this['speedWhenTurning'];
      /**
        * Start speed during a glide.
        * 
        * @type {number}
        */
      this['startSpeed'];
    }
  }
  
/** 
 * When added, this move control causes the mob to hover.
 * @hideconstructor
 * @class
 */
class MovementHover {
    /**
      * Identifier of this component. Should always be minecraft:movement.hover.
      * @name MovementHover#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementHover#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.hover.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
    }
  }
  
/** 
 * Move control that causes the mob to jump as it moves with a specified delay between jumps.
 * @hideconstructor
 * @class
 */
class MovementJump {
    /**
      * Identifier of this component. Should always be minecraft:movement.jump.
      * @name MovementJump#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementJump#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.jump.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
    }
  }
  
/** 
 * When added, this move control causes the mob to hop as it moves.
 * @hideconstructor
 * @class
 */
class MovementSkip {
    /**
      * Identifier of this component. Should always be minecraft:movement.skip.
      * @name MovementSkip#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementSkip#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.skip.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
    }
  }
  
/** 
 * When added, this move control causes the mob to sway side to side giving the impression it is swimming.
 * @hideconstructor
 * @class
 */
class MovementSway {
    /**
      * Identifier of this component. Should always be minecraft:movement.sway.
      * @name MovementSway#id
      * @type {string}
      */
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @name MovementSway#maxTurn
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Amplitude of the sway motion.
      * @name MovementSway#swayAmplitude
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Amount of sway frequency.
      * @name MovementSway#swayFrequency
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:movement.sway.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The maximum number in degrees the mob can turn per tick.
        * 
        * @type {number}
        */
      this['maxTurn'];
      /**
        * Amplitude of the sway motion.
        * 
        * @type {number}
        */
      this['swayAmplitude'];
      /**
        * Amount of sway frequency.
        * 
        * @type {number}
        */
      this['swayFrequency'];
    }
  }
  
/** 
 * Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.)
 * @hideconstructor
 * @class
 */
class NavigationClimb {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @name NavigationClimb#avoidDamageBlocks
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @name NavigationClimb#avoidPortals
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @name NavigationClimb#avoidSun
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @name NavigationClimb#avoidWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @name NavigationClimb#canBreach
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @name NavigationClimb#canBreakDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can float.
      * @name NavigationClimb#canFloat
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @name NavigationClimb#canJump
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @name NavigationClimb#canOpenDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @name NavigationClimb#canOpenIronDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether a path can be created through a door.
      * @name NavigationClimb#canPassDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @name NavigationClimb#canPathFromAir
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @name NavigationClimb#canPathOverLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @name NavigationClimb#canPathOverWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @name NavigationClimb#canSink
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @name NavigationClimb#canSwim
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @name NavigationClimb#canWalk
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @name NavigationClimb#canWalkInLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:navigation.climb.
      * @name NavigationClimb#id
      * @type {string}
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @name NavigationClimb#isAmphibious
      * @type {boolean}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Tells the pathfinder to avoid blocks that cause damage when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidDamageBlocks'];
      /**
        * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidPortals'];
      /**
        * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
        * 
        * @type {boolean}
        */
      this['avoidSun'];
      /**
        * Tells the pathfinder to avoid water when creating a path.
        * 
        * @type {boolean}
        */
      this['avoidWater'];
      /**
        * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
        * 
        * @type {boolean}
        */
      this['canBreach'];
      /**
        * Tells the pathfinder that it can path through a closed door and break it.
        * 
        * @type {boolean}
        */
      this['canBreakDoors'];
      /**
        * Tells the pathfinder whether or not it can float.
        * 
        * @type {boolean}
        */
      this['canFloat'];
      /**
        * Tells the pathfinder whether or not it can jump up blocks.
        * 
        * @type {boolean}
        */
      this['canJump'];
      /**
        * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenDoors'];
      /**
        * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenIronDoors'];
      /**
        * Whether a path can be created through a door.
        * 
        * @type {boolean}
        */
      this['canPassDoors'];
      /**
        * Tells the pathfinder that it can start pathing when in the air.
        * 
        * @type {boolean}
        */
      this['canPathFromAir'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the lava.
        * 
        * @type {boolean}
        */
      this['canPathOverLava'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the water.
        * 
        * @type {boolean}
        */
      this['canPathOverWater'];
      /**
        * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
        * 
        * @type {boolean}
        */
      this['canSink'];
      /**
        * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
        * 
        * @type {boolean}
        */
      this['canSwim'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground outside water.
        * 
        * @type {boolean}
        */
      this['canWalk'];
      /**
        * Tells the pathfinder whether or not it can travel in lava like walking on ground.
        * 
        * @type {boolean}
        */
      this['canWalkInLava'];
      /**
        * Identifier of this component. Should always be minecraft:navigation.climb.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground or go underwater.
        * 
        * @type {boolean}
        */
      this['isAmphibious'];
    }
  }
  
/** 
 * Allows this entity to generate paths by flying around the air like the regular Ghast.
 * @hideconstructor
 * @class
 */
class NavigationFloat {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @name NavigationFloat#avoidDamageBlocks
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @name NavigationFloat#avoidPortals
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @name NavigationFloat#avoidSun
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @name NavigationFloat#avoidWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @name NavigationFloat#canBreach
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @name NavigationFloat#canBreakDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can float.
      * @name NavigationFloat#canFloat
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @name NavigationFloat#canJump
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @name NavigationFloat#canOpenDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @name NavigationFloat#canOpenIronDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether a path can be created through a door.
      * @name NavigationFloat#canPassDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @name NavigationFloat#canPathFromAir
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @name NavigationFloat#canPathOverLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @name NavigationFloat#canPathOverWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @name NavigationFloat#canSink
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @name NavigationFloat#canSwim
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @name NavigationFloat#canWalk
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @name NavigationFloat#canWalkInLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:navigation.float.
      * @name NavigationFloat#id
      * @type {string}
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @name NavigationFloat#isAmphibious
      * @type {boolean}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Tells the pathfinder to avoid blocks that cause damage when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidDamageBlocks'];
      /**
        * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidPortals'];
      /**
        * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
        * 
        * @type {boolean}
        */
      this['avoidSun'];
      /**
        * Tells the pathfinder to avoid water when creating a path.
        * 
        * @type {boolean}
        */
      this['avoidWater'];
      /**
        * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
        * 
        * @type {boolean}
        */
      this['canBreach'];
      /**
        * Tells the pathfinder that it can path through a closed door and break it.
        * 
        * @type {boolean}
        */
      this['canBreakDoors'];
      /**
        * Tells the pathfinder whether or not it can float.
        * 
        * @type {boolean}
        */
      this['canFloat'];
      /**
        * Tells the pathfinder whether or not it can jump up blocks.
        * 
        * @type {boolean}
        */
      this['canJump'];
      /**
        * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenDoors'];
      /**
        * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenIronDoors'];
      /**
        * Whether a path can be created through a door.
        * 
        * @type {boolean}
        */
      this['canPassDoors'];
      /**
        * Tells the pathfinder that it can start pathing when in the air.
        * 
        * @type {boolean}
        */
      this['canPathFromAir'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the lava.
        * 
        * @type {boolean}
        */
      this['canPathOverLava'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the water.
        * 
        * @type {boolean}
        */
      this['canPathOverWater'];
      /**
        * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
        * 
        * @type {boolean}
        */
      this['canSink'];
      /**
        * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
        * 
        * @type {boolean}
        */
      this['canSwim'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground outside water.
        * 
        * @type {boolean}
        */
      this['canWalk'];
      /**
        * Tells the pathfinder whether or not it can travel in lava like walking on ground.
        * 
        * @type {boolean}
        */
      this['canWalkInLava'];
      /**
        * Identifier of this component. Should always be minecraft:navigation.float.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground or go underwater.
        * 
        * @type {boolean}
        */
      this['isAmphibious'];
    }
  }
  
/** 
 * Allows this entity to generate paths in the air (for example, like Minecraft Parrots do.)
 * @hideconstructor
 * @class
 */
class NavigationFly {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @name NavigationFly#avoidDamageBlocks
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @name NavigationFly#avoidPortals
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @name NavigationFly#avoidSun
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @name NavigationFly#avoidWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @name NavigationFly#canBreach
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @name NavigationFly#canBreakDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can float.
      * @name NavigationFly#canFloat
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @name NavigationFly#canJump
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @name NavigationFly#canOpenDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @name NavigationFly#canOpenIronDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether a path can be created through a door.
      * @name NavigationFly#canPassDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @name NavigationFly#canPathFromAir
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @name NavigationFly#canPathOverLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @name NavigationFly#canPathOverWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @name NavigationFly#canSink
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @name NavigationFly#canSwim
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @name NavigationFly#canWalk
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @name NavigationFly#canWalkInLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:navigation.fly.
      * @name NavigationFly#id
      * @type {string}
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @name NavigationFly#isAmphibious
      * @type {boolean}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Tells the pathfinder to avoid blocks that cause damage when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidDamageBlocks'];
      /**
        * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidPortals'];
      /**
        * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
        * 
        * @type {boolean}
        */
      this['avoidSun'];
      /**
        * Tells the pathfinder to avoid water when creating a path.
        * 
        * @type {boolean}
        */
      this['avoidWater'];
      /**
        * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
        * 
        * @type {boolean}
        */
      this['canBreach'];
      /**
        * Tells the pathfinder that it can path through a closed door and break it.
        * 
        * @type {boolean}
        */
      this['canBreakDoors'];
      /**
        * Tells the pathfinder whether or not it can float.
        * 
        * @type {boolean}
        */
      this['canFloat'];
      /**
        * Tells the pathfinder whether or not it can jump up blocks.
        * 
        * @type {boolean}
        */
      this['canJump'];
      /**
        * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenDoors'];
      /**
        * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenIronDoors'];
      /**
        * Whether a path can be created through a door.
        * 
        * @type {boolean}
        */
      this['canPassDoors'];
      /**
        * Tells the pathfinder that it can start pathing when in the air.
        * 
        * @type {boolean}
        */
      this['canPathFromAir'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the lava.
        * 
        * @type {boolean}
        */
      this['canPathOverLava'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the water.
        * 
        * @type {boolean}
        */
      this['canPathOverWater'];
      /**
        * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
        * 
        * @type {boolean}
        */
      this['canSink'];
      /**
        * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
        * 
        * @type {boolean}
        */
      this['canSwim'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground outside water.
        * 
        * @type {boolean}
        */
      this['canWalk'];
      /**
        * Tells the pathfinder whether or not it can travel in lava like walking on ground.
        * 
        * @type {boolean}
        */
      this['canWalkInLava'];
      /**
        * Identifier of this component. Should always be minecraft:navigation.fly.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground or go underwater.
        * 
        * @type {boolean}
        */
      this['isAmphibious'];
    }
  }
  
/** 
 * Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.
 * @hideconstructor
 * @class
 */
class NavigationGeneric {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @name NavigationGeneric#avoidDamageBlocks
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @name NavigationGeneric#avoidPortals
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @name NavigationGeneric#avoidSun
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @name NavigationGeneric#avoidWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @name NavigationGeneric#canBreach
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @name NavigationGeneric#canBreakDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can float.
      * @name NavigationGeneric#canFloat
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @name NavigationGeneric#canJump
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @name NavigationGeneric#canOpenDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @name NavigationGeneric#canOpenIronDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether a path can be created through a door.
      * @name NavigationGeneric#canPassDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @name NavigationGeneric#canPathFromAir
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @name NavigationGeneric#canPathOverLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @name NavigationGeneric#canPathOverWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @name NavigationGeneric#canSink
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @name NavigationGeneric#canSwim
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @name NavigationGeneric#canWalk
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @name NavigationGeneric#canWalkInLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:navigation.generic.
      * @name NavigationGeneric#id
      * @type {string}
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @name NavigationGeneric#isAmphibious
      * @type {boolean}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Tells the pathfinder to avoid blocks that cause damage when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidDamageBlocks'];
      /**
        * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidPortals'];
      /**
        * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
        * 
        * @type {boolean}
        */
      this['avoidSun'];
      /**
        * Tells the pathfinder to avoid water when creating a path.
        * 
        * @type {boolean}
        */
      this['avoidWater'];
      /**
        * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
        * 
        * @type {boolean}
        */
      this['canBreach'];
      /**
        * Tells the pathfinder that it can path through a closed door and break it.
        * 
        * @type {boolean}
        */
      this['canBreakDoors'];
      /**
        * Tells the pathfinder whether or not it can float.
        * 
        * @type {boolean}
        */
      this['canFloat'];
      /**
        * Tells the pathfinder whether or not it can jump up blocks.
        * 
        * @type {boolean}
        */
      this['canJump'];
      /**
        * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenDoors'];
      /**
        * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenIronDoors'];
      /**
        * Whether a path can be created through a door.
        * 
        * @type {boolean}
        */
      this['canPassDoors'];
      /**
        * Tells the pathfinder that it can start pathing when in the air.
        * 
        * @type {boolean}
        */
      this['canPathFromAir'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the lava.
        * 
        * @type {boolean}
        */
      this['canPathOverLava'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the water.
        * 
        * @type {boolean}
        */
      this['canPathOverWater'];
      /**
        * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
        * 
        * @type {boolean}
        */
      this['canSink'];
      /**
        * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
        * 
        * @type {boolean}
        */
      this['canSwim'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground outside water.
        * 
        * @type {boolean}
        */
      this['canWalk'];
      /**
        * Tells the pathfinder whether or not it can travel in lava like walking on ground.
        * 
        * @type {boolean}
        */
      this['canWalkInLava'];
      /**
        * Identifier of this component. Should always be minecraft:navigation.generic.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground or go underwater.
        * 
        * @type {boolean}
        */
      this['isAmphibious'];
    }
  }
  
/** 
 * Allows this entity to generate paths in the air (for example, like the Minecraft Bees do.) Keeps them from falling out of the skies and doing predictive movement.
 * @hideconstructor
 * @class
 */
class NavigationHover {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @name NavigationHover#avoidDamageBlocks
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @name NavigationHover#avoidPortals
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @name NavigationHover#avoidSun
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @name NavigationHover#avoidWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @name NavigationHover#canBreach
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @name NavigationHover#canBreakDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can float.
      * @name NavigationHover#canFloat
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @name NavigationHover#canJump
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @name NavigationHover#canOpenDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @name NavigationHover#canOpenIronDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether a path can be created through a door.
      * @name NavigationHover#canPassDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @name NavigationHover#canPathFromAir
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @name NavigationHover#canPathOverLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @name NavigationHover#canPathOverWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @name NavigationHover#canSink
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @name NavigationHover#canSwim
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @name NavigationHover#canWalk
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @name NavigationHover#canWalkInLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:navigation.hover.
      * @name NavigationHover#id
      * @type {string}
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @name NavigationHover#isAmphibious
      * @type {boolean}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Tells the pathfinder to avoid blocks that cause damage when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidDamageBlocks'];
      /**
        * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidPortals'];
      /**
        * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
        * 
        * @type {boolean}
        */
      this['avoidSun'];
      /**
        * Tells the pathfinder to avoid water when creating a path.
        * 
        * @type {boolean}
        */
      this['avoidWater'];
      /**
        * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
        * 
        * @type {boolean}
        */
      this['canBreach'];
      /**
        * Tells the pathfinder that it can path through a closed door and break it.
        * 
        * @type {boolean}
        */
      this['canBreakDoors'];
      /**
        * Tells the pathfinder whether or not it can float.
        * 
        * @type {boolean}
        */
      this['canFloat'];
      /**
        * Tells the pathfinder whether or not it can jump up blocks.
        * 
        * @type {boolean}
        */
      this['canJump'];
      /**
        * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenDoors'];
      /**
        * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenIronDoors'];
      /**
        * Whether a path can be created through a door.
        * 
        * @type {boolean}
        */
      this['canPassDoors'];
      /**
        * Tells the pathfinder that it can start pathing when in the air.
        * 
        * @type {boolean}
        */
      this['canPathFromAir'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the lava.
        * 
        * @type {boolean}
        */
      this['canPathOverLava'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the water.
        * 
        * @type {boolean}
        */
      this['canPathOverWater'];
      /**
        * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
        * 
        * @type {boolean}
        */
      this['canSink'];
      /**
        * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
        * 
        * @type {boolean}
        */
      this['canSwim'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground outside water.
        * 
        * @type {boolean}
        */
      this['canWalk'];
      /**
        * Tells the pathfinder whether or not it can travel in lava like walking on ground.
        * 
        * @type {boolean}
        */
      this['canWalkInLava'];
      /**
        * Identifier of this component. Should always be minecraft:navigation.hover.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground or go underwater.
        * 
        * @type {boolean}
        */
      this['isAmphibious'];
    }
  }
  
/** 
 * Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.
 * @hideconstructor
 * @class
 */
class NavigationWalk {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @name NavigationWalk#avoidDamageBlocks
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @name NavigationWalk#avoidPortals
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @name NavigationWalk#avoidSun
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @name NavigationWalk#avoidWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @name NavigationWalk#canBreach
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @name NavigationWalk#canBreakDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can float.
      * @name NavigationWalk#canFloat
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @name NavigationWalk#canJump
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @name NavigationWalk#canOpenDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @name NavigationWalk#canOpenIronDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Whether a path can be created through a door.
      * @name NavigationWalk#canPassDoors
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @name NavigationWalk#canPathFromAir
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @name NavigationWalk#canPathOverLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @name NavigationWalk#canPathOverWater
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @name NavigationWalk#canSink
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @name NavigationWalk#canSwim
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @name NavigationWalk#canWalk
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @name NavigationWalk#canWalkInLava
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:navigation.swim.
      * @name NavigationWalk#id
      * @type {string}
      */
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @name NavigationWalk#isAmphibious
      * @type {boolean}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Tells the pathfinder to avoid blocks that cause damage when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidDamageBlocks'];
      /**
        * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
        * 
        * @type {boolean}
        */
      this['avoidPortals'];
      /**
        * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
        * 
        * @type {boolean}
        */
      this['avoidSun'];
      /**
        * Tells the pathfinder to avoid water when creating a path.
        * 
        * @type {boolean}
        */
      this['avoidWater'];
      /**
        * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
        * 
        * @type {boolean}
        */
      this['canBreach'];
      /**
        * Tells the pathfinder that it can path through a closed door and break it.
        * 
        * @type {boolean}
        */
      this['canBreakDoors'];
      /**
        * Tells the pathfinder whether or not it can float.
        * 
        * @type {boolean}
        */
      this['canFloat'];
      /**
        * Tells the pathfinder whether or not it can jump up blocks.
        * 
        * @type {boolean}
        */
      this['canJump'];
      /**
        * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenDoors'];
      /**
        * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
        * 
        * @type {boolean}
        */
      this['canOpenIronDoors'];
      /**
        * Whether a path can be created through a door.
        * 
        * @type {boolean}
        */
      this['canPassDoors'];
      /**
        * Tells the pathfinder that it can start pathing when in the air.
        * 
        * @type {boolean}
        */
      this['canPathFromAir'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the lava.
        * 
        * @type {boolean}
        */
      this['canPathOverLava'];
      /**
        * Tells the pathfinder whether or not it can travel on the surface of the water.
        * 
        * @type {boolean}
        */
      this['canPathOverWater'];
      /**
        * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
        * 
        * @type {boolean}
        */
      this['canSink'];
      /**
        * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
        * 
        * @type {boolean}
        */
      this['canSwim'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground outside water.
        * 
        * @type {boolean}
        */
      this['canWalk'];
      /**
        * Tells the pathfinder whether or not it can travel in lava like walking on ground.
        * 
        * @type {boolean}
        */
      this['canWalkInLava'];
      /**
        * Identifier of this component. Should always be minecraft:navigation.swim.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Tells the pathfinder whether or not it can walk on the ground or go underwater.
        * 
        * @type {boolean}
        */
      this['isAmphibious'];
    }
  }
  
/** 
 * Represents a player within the world.
 * @hideconstructor
 * @class
 */
class Player {
    /**
      * Identifier for the player.
      * @name Player#id
      * @type {string}
      * @throws This function can throw errors.
      */
    /**
      * True if the player is currently using a sneaking movement.
      * @name Player#isSneaking
      * @type {boolean}
      */
    /**
      * Current location of the player.
      * @name Player#location
      * @type {module:Minecraft~Location}
      * @throws This function can throw errors.
      */
    /**
      * Name of the player.
      * @name Player#name
      * @type {string}
      * @throws This function can throw errors.
      */
    /**
      * Optional name tag of the player.
      * @name Player#nameTag
      * @type {string}
      */
    /**
      * Current speed of the player across X, Y, and Z dimensions.
      * @name Player#velocity
      * @type {module:Minecraft~Location}
      * @throws This function can throw errors.
      */
    
/**
  * Adds an effect, like poison, to the entity.
  *
  * @method
  * @param {module:Minecraft~EffectType} effectType - Type of effect to add to the entity. 
  * @param {number} duration - Amount of time, in seconds, for the effect to apply. 
  * @param {number} amplifier - Optional amplification of the effect to apply. 
  * @throws This function can throw errors.
  */
addEffect (effectType, duration, amplifier) {
}
/**
  *
  * @method
  * @param {string} componentId -  
  * @returns {any}
  */
getComponent (componentId) {
}
/**
  *
  * @method
  * @returns {Array.<{any}>}
  */
getComponents () {
}
/**
  *
  * @method
  * @param {module:Minecraft~EffectType} effectType -  
  * @returns {module:Minecraft~Effect}
  * @throws This function can throw errors.
  */
getEffect (effectType) {
}
/**
  *
  * @method
  * @param {string} componentId -  
  * @returns {boolean}
  */
hasComponent (componentId) {
}
/**
  *
  * @method
  * @throws This function can throw errors.
  */
kill () {
}
/**
  * Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
  *
  * @method
  * @param {string} eventName - Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed. 
  * @throws This function can throw errors.
  */
triggerEvent (eventName) {
}

     constructor() {
      /**
        * Identifier for the player.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * True if the player is currently using a sneaking movement.
        * 
        * @type {boolean}
        */
      this['isSneaking'];
      /**
        * Current location of the player.
        * 
        * @type {module:Minecraft~Location}
        */
      this['location'];
      /**
        * Name of the player.
        * 
        * @type {string}
        */
      this['name'];
      /**
        * Optional name tag of the player.
        * 
        * @type {string}
        */
      this['nameTag'];
      /**
        * Current speed of the player across X, Y, and Z dimensions.
        * 
        * @type {module:Minecraft~Location}
        */
      this['velocity'];
    }
  }
  
/** 
 * When added, this component adds the capability that an entity can be ridden by another entity.
 * @hideconstructor
 * @class
 */
class Rideable {
    /**
      * Zero-based index of the seat that can used to control this entity.
      * @name Rideable#controllingSeat
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Determines whether interactions are not supported if the entity is crouching.
      * @name Rideable#crouchingSkipInteract
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * A string-list of entity types that this entity can support as riders.
      * @name Rideable#familyTypes
      * @type {Array.<{any}>}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:rideable.
      * @name Rideable#id
      * @type {string}
      */
    /**
      * Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).
      * @name Rideable#interactText
      * @type {string}
      * @throws This function can throw errors.
      */
    /**
      * If true, this entity will pull in entities that are in the correct family_types into any available seat.
      * @name Rideable#pullInEntities
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * If true, this entity will be picked when looked at by the rider.
      * @name Rideable#riderCanInteract
      * @type {boolean}
      * @throws This function can throw errors.
      */
    /**
      * Number of seats for riders defined for this entity.
      * @name Rideable#seatCount
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * The list of positions and number of riders for each position for entities riding this entity.
      * @name Rideable#seats
      * @type {Array.<{module:Minecraft~Seat}>}
      * @throws This function can throw errors.
      */
    
/**
  * Adds an entity to this entity as a rider.
  *
  * @method
  * @param {module:Minecraft~Entity} rider - Entity that will become the rider of this entity. 
  * @returns {boolean}
  * @throws This function can throw errors.
  */
addRider (rider) {
}
/**
  * Ejects the specified rider of this entity.
  *
  * @method
  * @param {module:Minecraft~Entity} rider - Entity that should be ejected from this entity. 
  * @throws This function can throw errors.
  */
ejectRider (rider) {
}
/**
  * Ejects all riders of this entity.
  *
  * @method
  * @throws This function can throw errors.
  */
ejectRiders () {
}

     constructor() {
      /**
        * Zero-based index of the seat that can used to control this entity.
        * 
        * @type {number}
        */
      this['controllingSeat'];
      /**
        * Determines whether interactions are not supported if the entity is crouching.
        * 
        * @type {boolean}
        */
      this['crouchingSkipInteract'];
      /**
        * A string-list of entity types that this entity can support as riders.
        * 
        * @type {Array.<{any}>}
        */
      this['familyTypes'];
      /**
        * Identifier of this component. Should always be minecraft:rideable.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).
        * 
        * @type {string}
        */
      this['interactText'];
      /**
        * If true, this entity will pull in entities that are in the correct family_types into any available seat.
        * 
        * @type {boolean}
        */
      this['pullInEntities'];
      /**
        * If true, this entity will be picked when looked at by the rider.
        * 
        * @type {boolean}
        */
      this['riderCanInteract'];
      /**
        * Number of seats for riders defined for this entity.
        * 
        * @type {number}
        */
      this['seatCount'];
      /**
        * The list of positions and number of riders for each position for entities riding this entity.
        * 
        * @type {Array.<{module:Minecraft~Seat}>}
        */
      this['seats'];
    }
  }
  
/** 
 * Describes a particular seating position on this rideable entity.
 * @hideconstructor
 * @class
 */
class Seat {
    /**
      * If specified, contains a forced rotation that the riders in this seat are facing.
      * @name Seat#lockRiderRotation
      * @type {number}
      */
    /**
      * A maximum number of riders that this seat can support.
      * @name Seat#maxRiderCount
      * @type {number}
      */
    /**
      * A minimum number of riders that can be placed in this seat position, if this seat is to be filled.
      * @name Seat#minRiderCount
      * @type {number}
      */
    /**
      * Physical location of this seat, relative to the entity's location.
      * @name Seat#position
      * @type {module:Minecraft~Location}
      */
    

     constructor() {
      /**
        * If specified, contains a forced rotation that the riders in this seat are facing.
        * 
        * @type {number}
        */
      this['lockRiderRotation'];
      /**
        * A maximum number of riders that this seat can support.
        * 
        * @type {number}
        */
      this['maxRiderCount'];
      /**
        * A minimum number of riders that can be placed in this seat position, if this seat is to be filled.
        * 
        * @type {number}
        */
      this['minRiderCount'];
      /**
        * Physical location of this seat, relative to the entity's location.
        * 
        * @type {module:Minecraft~Location}
        */
      this['position'];
    }
  }
  
/** 
 * Defines the entity's strength to carry items.
 * @hideconstructor
 * @class
 */
class Strength {
    /**
      * Identifier of this component. Should always be minecraft:strength.
      * @name Strength#id
      * @type {string}
      */
    /**
      * Maximum strength of this entity, as defined in the entity type definition.
      * @name Strength#max
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Current strength value of this entity, after any effects or component updates are applied.
      * @name Strength#value
      * @type {number}
      * @throws This function can throw errors.
      */
    

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:strength.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Maximum strength of this entity, as defined in the entity type definition.
        * 
        * @type {number}
        */
      this['max'];
      /**
        * Current strength value of this entity, after any effects or component updates are applied.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * Contains the state of a string-based property for a {@link Minecraft.BlockPermutation}.
 * @hideconstructor
 * @class
 */
class StringBlockProperty {
    /**
      * Name of this property.
      * @name StringBlockProperty#name
      * @type {string}
      */
    /**
      * A list of allowed values for this string property.
      * @name StringBlockProperty#validValues
      * @type {Array.<{any}>}
      */
    /**
      * The current value of this property.
      * @name StringBlockProperty#value
      * @type {string}
      */
    

     constructor() {
      /**
        * Name of this property.
        * 
        * @type {string}
        */
      this['name'];
      /**
        * A list of allowed values for this string property.
        * 
        * @type {Array.<{any}>}
        */
      this['validValues'];
      /**
        * The current value of this property.
        * 
        * @type {string}
        */
      this['value'];
    }
  }
  
/** 
 * Defines the rules for a mob to be tamed by the player.
 * @hideconstructor
 * @class
 */
class Tameable {
    /**
      * Identifier of this component. Should always be minecraft:tameable.
      * @name Tameable#id
      * @type {string}
      */
    /**
      * The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
      * @name Tameable#probability
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Event to run when this entity becomes tamed.
      * @name Tameable#tameEvent
      * @type {module:Minecraft~Trigger}
      * @throws This function can throw errors.
      */
    /**
      * The list of items that can be used to tame this entity.
      * @name Tameable#tameItems
      * @type {Array.<{any}>}
      * @throws This function can throw errors.
      */
    
/**
  * Tames this entity.
  *
  * @method
  * @returns {boolean}
  * @throws This function can throw errors.
  */
tame () {
}

     constructor() {
      /**
        * Identifier of this component. Should always be minecraft:tameable.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
        * 
        * @type {number}
        */
      this['probability'];
      /**
        * Event to run when this entity becomes tamed.
        * 
        * @type {module:Minecraft~Trigger}
        */
      this['tameEvent'];
      /**
        * The list of items that can be used to tame this entity.
        * 
        * @type {Array.<{any}>}
        */
      this['tameItems'];
    }
  }
  
/** 
 * Represents a trigger for firing an event.
 * @hideconstructor
 * @class
 */
class Trigger {
    

     constructor() {
    }
  }
  
/** 
 * Defines the general movement speed underwater of this entity.
 * @hideconstructor
 * @class
 */
class UnderwaterMovement {
    /**
      * Read-only. Returns the current value of movement speed underwater for the entity.
      * @name UnderwaterMovement#current
      * @type {number}
      * @throws This function can throw errors.
      */
    /**
      * Identifier of this component. Should always be minecraft:underwater_movement.
      * @name UnderwaterMovement#id
      * @type {string}
      */
    /**
      * Value for movement speed underwater as defined through entity components.
      * @name UnderwaterMovement#value
      * @type {number}
      * @throws This function can throw errors.
      */
    
/**
  * Resets the current movement speed underwater for the entity to the default value implied by the current component state of the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToDefaultValue () {
}
/**
  * Resets the movement speed underwater to the maximum value for the entity, as determined by the set of components that are on the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMaxValue () {
}
/**
  * Resets the movement speed underwater to the minimum value as defined by the component state of this entity.
  *
  * @method
  * @throws This function can throw errors.
  */
resetToMinValue () {
}
/**
  * Sets the current value of movement speed underwater for the entity.
  *
  * @method
  * @throws This function can throw errors.
  */
setCurrent () {
}

     constructor() {
      /**
        * Read-only. Returns the current value of movement speed underwater for the entity.
        * 
        * @type {number}
        */
      this['current'];
      /**
        * Identifier of this component. Should always be minecraft:underwater_movement.
        * 
        * @type {string}
        */
      this['id'];
      /**
        * Value for movement speed underwater as defined through entity components.
        * 
        * @type {number}
        */
      this['value'];
    }
  }
  
/** 
 * Contains information related to changes in weather in the environment.
 * @hideconstructor
 * @class
 */
class WeatherChangedEvent {
    /**
      * Dimension in which the weather has changed.
      * @name WeatherChangedEvent#dimension
      * @type {string}
      */
    /**
      * Whether it is lightning after the change in weather.
      * @name WeatherChangedEvent#lightning
      * @type {boolean}
      */
    /**
      * Whether it is raining after the change in weather.
      * @name WeatherChangedEvent#raining
      * @type {boolean}
      */
    

     constructor() {
      /**
        * Dimension in which the weather has changed.
        * 
        * @type {string}
        */
      this['dimension'];
      /**
        * Whether it is lightning after the change in weather.
        * 
        * @type {boolean}
        */
      this['lightning'];
      /**
        * Whether it is raining after the change in weather.
        * 
        * @type {boolean}
        */
      this['raining'];
    }
  }
  
/** 
 * A class that wraps the state of a dimension (such as the overworld, the nether, or the end)
 * @hideconstructor
 * @class
 */
class World {
    /**
      * Contains a set of events that are applicable to the entirety of the world.
      * @name World#events
      * @type {module:Minecraft~Events}
      */
    
/**
  *
  * @method
  * @param {('overworld'|'nether'|'the end')} dimensionName - The name of the Dimension 
  * @returns {module:Minecraft~Dimension}
  * @throws Throws if the given dimension name is invalid
  */
getDimension (dimensionName) {
}
/**
  * Returns all players currently in the world.
  *
  * @method
  * @returns {Array.<{module:Minecraft~Player}>}
  */
getPlayers () {
}

     constructor() {
      /**
        * Contains a set of events that are applicable to the entirety of the world.
        * 
        * @type {module:Minecraft~Events}
        */
      this['events'];
    }
  }
  

