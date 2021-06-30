/** @module GameTest */
/** 
 * Executes a set of steps defined via chained .thenXyz methods, sequentially. This facilitates a 'script' of GameTest setup methods and assertions over time.
 * @hideconstructor
 * @class
 */
class GameTestSequence {
    
/**
  * Runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.
  *
  * @method
  * @param {function():undefined} callback - Callback function to execute. 
  * @returns {module:GameTest~GameTestSequence}
  */
thenExecute (callback) {
}
/**
  * After a delay, runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.
  *
  * @method
  * @param {number} delayTicks - Number of ticks to wait before executing the callback. 
  * @param {function():undefined} callback - Callback function to execute. 
  * @returns {module:GameTest~GameTestSequence}
  */
thenExecuteAfter (delayTicks, callback) {
}
/**
  * Runs the given callback every tick for the given number of ticks.
  *
  * @method
  * @param {number} tickCount -  
  * @param {function():undefined} callback - Callback function to execute. 
  * @returns {module:GameTest~GameTestSequence}
  */
thenExecuteFor (tickCount, callback) {
}
/**
  * Causes the test to fail if this step in the GameTest sequence is reached.
  *
  * @method
  * @param {string} errorMessage - Error message summarizing the failure condition. 
  */
thenFail (errorMessage) {
}
/**
  * Idles the GameTest sequence for the specified delayTicks.
  *
  * @method
  * @param {number} delayTicks - Number of ticks to delay for this step in the GameTest sequence. 
  * @returns {module:GameTest~GameTestSequence}
  */
thenIdle (delayTicks) {
}
/**
  * Marks the GameTest a success if this step is reached in the GameTest sequence.
  *
  * @method
  */
thenSucceed () {
}
/**
  * Executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
  *
  * @method
  * @param {function():undefined} callback - Testing callback function to execute. Typically, this function will have .assertXyz functions within it. 
  * @returns {module:GameTest~GameTestSequence}
  */
thenWait (callback) {
}
/**
  * After a delay from the previous step, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
  *
  * @method
  * @param {number} delayTicks - Tick (after the previous step in the GameTest sequence) to run the callback at. 
  * @param {function():undefined} callback - Testing callback function to execute. Typically, this function will have .assertXyz functions within it. 
  * @returns {module:GameTest~GameTestSequence}
  */
thenWaitWithDelay (delayTicks, callback) {
}

     constructor() {
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class Helper {
    
/**
  * Tests that the condition specified in _condition_ is true. If not, an error with the specified _message_ is thrown.
  *
  * @method
  * @param {boolean} condition - Expression of the condition to evaluate. 
  * @param {string} message - Message that is passed if the _condition_ does not evaluate to true. 
  * @throws This function can throw errors.
  */
assert (condition, message) {
}
/**
  * Tests that a block has a particular state value at the specified location. If it does not have that state value, an exception is thrown.
  *
  * @method
  * @param {string} blockStateName - Name of the block state to test. 
  * @param {number} stateValue - Expected state value. 
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  * @example <caption>testIfButtonNotPressed.js</caption>
  *    test.assertBlockState("button_pressed_bit", 0, buttonPos);
  *    
  */
assertBlockState (blockStateName, stateValue, location) {
}
/**
  * Tests that a block of the specified type is not present at the specified location. If it is, an exception is thrown.
  *
  * @method
  * @param {module:GameTest~BlockType} blockType -  
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
assertBlockTypeNotPresent (blockType, location) {
}
/**
  * Tests that a block of the specified type is present at the specified location. If it is not, an exception is thrown.
  *
  * @method
  * @param {module:GameTest~BlockType} blockType -  
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
assertBlockTypePresent (blockType, location) {
}
/**
  *
  * @method
  * @param {module:GameTest~Entity} mob -  
  * @param {module:GameTest~BlockLocation} location -  
  * @param {boolean} canReach -  
  * @throws This function can throw errors.
  */
assertCanReachLocation (mob, location, canReach) {
}
/**
  * Tests that a container (e.g., a chest) at the specified location contains a specified of item stack. If not, an error is thrown.
  *
  * @method
  * @param {module:GameTest~ItemStack} itemStack - Represents the type of item to check for. The specified container must contain at least 1 item matching the item type defined in _itemStack_. 
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
assertContainerContains (itemStack, location) {
}
/**
  * Tests that a container (e.g., a chest) at the specified location is empty. If not, an error is thrown.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
assertContainerEmpty (location) {
}
/**
  * Tests that an entity (e.g., a skeleton) at the specified location has a particular piece of data. If not, an error is thrown.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @param {string} entityIdentifier - Identifier of the entity (e.g., 'minecraft:skeleton') to look for. Note if no namespace is specified, 'minecraft:' is assumed. 
  * @param {function(module:GameTest~Entity):boolean} callback - Callback function where facets of the selected entity can be tested for. If this callback function returns false or no entity with the specified identifier is found, an exception is thrown. 
  * @throws This function can throw errors.
  * @example <caption>villagerEffectTest.js</caption>
  *    test.assertEntityData(
  *      villagerPos,
  *      "minecraft:villager",
  *      (entity) => entity.getEffect(Effects.regeneration).getDuration() > 120
  *    ); // At least 6 seconds remaining in the villagers' effect
  *    
  */
assertEntityData (location, entityIdentifier, callback) {
}
/**
  * Tests that an entity has a specific piece of armor equipped. If not, an error is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Identifier of the entity to match (e.g., 'minecraft:skeleton'). 
  * @param {number} armorSlot - Container slot index to test. 
  * @param {string} armorName - Name of the armor to look for. 
  * @param {number} armorData -  
  * @param {module:GameTest~BlockLocation} location -  
  * @param {boolean} hasArmor - Whether or not the entity is expected to have the specified armor equipped. 
  * @throws This function can throw errors.
  * @example <caption>horseArmorTest.js</caption>
  *    test.assertEntityHasArmor("minecraft:horse", armorSlotTorso, "diamond_horse_armor", 0, horseLocation, true);
  *    
  */
assertEntityHasArmor (entityIdentifier, armorSlot, armorName, armorData, location, hasArmor) {
}
/**
  * Tests that an entity has a particular component. If not, an exception is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Identifier of the specified entity (e.g., 'minecraft:skeleton'). If the namespace is not specified, 'minecraft:' is assumed. 
  * @param {string} componentIdentifier - Identifier of the component to check for. If the namespace is not specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~BlockLocation} location -  
  * @param {boolean} hasComponent - Determines whether to test that the component exists, or does not. 
  * @throws This function can throw errors.
  * @example <caption>sheepShearedTest.js</caption>
  *    test.assertEntityHasComponent("minecraft:sheep", "minecraft:is_sheared", entityLoc, false);
  *    
  */
assertEntityHasComponent (entityIdentifier, componentIdentifier, location, hasComponent) {
}
/**
  * Tests that a particular entity is still present and alive within the GameTest area. If not, an error is thrown.
  *
  * @method
  * @param {module:GameTest~Entity} entity - Specific entity to test for. 
  * @throws This function can throw errors.
  */
assertEntityInstancePresent (entity) {
}
/**
  * Tests that an entity of a specified type is not present at a specified location. If it is, an exception is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
assertEntityNotPresent (entityIdentifier, location) {
}
/**
  * Tests that an entity of a specified type is not present within the GameTest area. If not, an exception is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @throws This function can throw errors.
  */
assertEntityNotPresentInArea (entityIdentifier) {
}
/**
  * Tests that an entity of a specified type is not touching or connected to another entity. If it is, an exception is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~Location} position - Location of the entity to test for. 
  * @throws This function can throw errors.
  */
assertEntityNotTouching (entityIdentifier, position) {
}
/**
  * Tests that an entity of a specified type is present at a particular location. If not, an exception is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
assertEntityPresent (entityIdentifier, location) {
}
/**
  * Tests that an entity of a specified type is present within the GameTest area. If not, an exception is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @throws This function can throw errors.
  */
assertEntityPresentInArea (entityIdentifier) {
}
/**
  * Tests that an entity of a specified type is touching or connected to another entity. If not, an exception is thrown.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~Location} position - Location of the entity to test for. 
  * @throws This function can throw errors.
  */
assertEntityTouching (entityIdentifier, position) {
}
/**
  * Tests that a block at a location contains water in addition to another block type. If not, an error is thrown. Water blocks are not considered to be waterlogged.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @param {boolean} isWaterlogged - Whether not not the block at _position_ is expected to be waterlogged. 
  * @throws This function can throw errors.
  */
assertIsWaterlogged (location, isWaterlogged) {
}
/**
  * Tests that items of a particular type and count are present within an area. If not, an error is thrown.
  *
  * @method
  * @param {module:GameTest~ItemType} itemType - Type of item to look for. 
  * @param {module:GameTest~BlockLocation} location -  
  * @param {number} searchDistance - Range, in blocks, to aggregate a count of items around. If 0, will only search the particular block at _position_. 
  * @param {number} count - Number of items, at minimum, to look and test for. 
  * @throws This function can throw errors.
  * @example <caption>findFeathers.js</caption>
  *    test.assertItemEntityCountIs(Items.feather, expectedFeatherLoc, 0, 1);
  *    
  */
assertItemEntityCountIs (itemType, location, searchDistance, count) {
}
/**
  * Tests that a particular item entity is not present at a particular location. If it is, an exception is thrown.
  *
  * @method
  * @param {module:GameTest~ItemType} itemType - Type of item to test for. 
  * @param {module:GameTest~BlockLocation} location -  
  * @param {number} searchDistance - Radius in blocks to look for the item entity. 
  * @throws This function can throw errors.
  */
assertItemEntityNotPresent (itemType, location, searchDistance) {
}
/**
  * Tests that a particular item entity is present at a particular location. If not, an exception is thrown.
  *
  * @method
  * @param {module:GameTest~ItemType} itemType - Type of item to test for. 
  * @param {module:GameTest~BlockLocation} location -  
  * @param {number} searchDistance - Radius in blocks to look for the item entity. 
  * @throws This function can throw errors.
  */
assertItemEntityPresent (itemType, location, searchDistance) {
}
/**
  * Tests that Redstone power at a particular location matches a particular value. If not, an exception is thrown.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @param {number} power - Expected power level. 
  * @throws This function can throw errors.
  */
assertRedstonePower (location, power) {
}
/**
  * Marks the current test as a failure case.
  *
  * @method
  * @param {string} errorMessage - Error message summarizing the failure condition. 
  * @throws This function can throw errors.
  */
fail (errorMessage) {
}
/**
  * Runs the given callback. If the callback does not throw an exception, the test is marked as a failure.
  *
  * @method
  * @param {function():undefined} callback - Callback function that runs. If the function runs successfully, the test is marked as a failure. Typically, this function will have .assertXyz method calls within it. 
  * @throws This function can throw errors.
  */
failIf (callback) {
}
/**
  * Gets a block at the specified block location.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location - Location of the block to retrieve. 
  * @returns {module:GameTest~Block}
  * @throws This function can throw errors.
  */
getBlock (location) {
}
/**
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @returns {module:GameTest~ScriptGameTestConnectivity}
  * @throws This function can throw errors.
  */
getFenceConnectivity (location) {
}
/**
  *
  * @method
  * @returns {number}
  */
getTestDirection () {
}
/**
  * Kills all entities within the GameTest structure.
  *
  * @method
  * @throws This function can throw errors.
  */
killAllEntities () {
}
/**
  * Presses a button at a block location.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @throws Will throw an error if a button is not present at the specified position.
  */
pressButton (location) {
}
/**
  * Displays the specified message to all players.
  *
  * @method
  * @param {string} text - Message to display. 
  * @throws This function can throw errors.
  */
print (text) {
}
/**
  * Pulls a lever at a block location.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @throws Will throw an error if a lever is not present at the specified position.
  */
pullLever (location) {
}
/**
  * Sends a Redstone pulse at a particular location by creating a temporary Redstone block.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location -  
  * @param {number} duration - Number of ticks to pulse Redstone. 
  * @throws This function can throw errors.
  */
pulseRedstone (location, duration) {
}
/**
  *
  * @method
  * @param {module:GameTest~BlockLocation} worldLocation -  
  * @returns {module:GameTest~BlockLocation}
  * @throws This function can throw errors.
  */
relativeBlockLocation (worldLocation) {
}
/**
  * From a BlockLocation, returns a new BlockLocation with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.
  *
  * @method
  * @param {module:GameTest~Location} worldLocation - Absolute location in the world to convert to a relative location. 
  * @returns {module:GameTest~Location}
  * @throws This function can throw errors.
  */
relativeLocation (worldLocation) {
}
/**
  *
  * @method
  * @param {number} direction -  
  * @returns {number}
  * @throws This function can throw errors.
  */
rotateDirection (direction) {
}
/**
  * Runs a specific callback after a specified delay of ticks
  *
  * @method
  * @param {number} delayTicks - Number of ticks to delay before running the specified callback. 
  * @param {function():undefined} callback - Callback function to execute. 
  * @throws This function can throw errors.
  */
runAfterDelay (delayTicks, callback) {
}
/**
  * Runs the given callback after a delay of _tick_ ticks from the start of the GameTest.
  *
  * @method
  * @param {number} tick - Tick (after the start of the GameTest) to run the callback at. 
  * @param {function():undefined} callback - Callback function to execute. 
  * @throws This function can throw errors.
  */
runAtTickTime (tick, callback) {
}
/**
  * Sets a block to a particular configuration (a BlockPermutation) at the specified block location.
  *
  * @method
  * @param {module:GameTest~BlockPermutation} blockData - Permutation that contains the configuration data for a block. 
  * @param {module:GameTest~BlockLocation} location - Location of the block to set. 
  * @throws This function can throw errors.
  */
setBlockPermutation (blockData, location) {
}
/**
  * Sets a block to a particular type at the specified block location.
  *
  * @method
  * @param {module:GameTest~BlockType} blockType -  
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
setBlockType (blockType, location) {
}
/**
  * Sets the fuse of an explodable entity.
  *
  * @method
  * @param {module:GameTest~Entity} actor - Entity that is explodable. 
  * @param {number} fuseLength - Length of time, in ticks, before the entity explodes. 
  * @throws This function can throw errors.
  */
setTntFuse (actor, fuseLength) {
}
/**
  * Spawns an entity at a location.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>). 
  * @param {module:GameTest~BlockLocation} location - Location where the entity should be spawned. 
  * @returns {module:GameTest~Entity}
  * @throws This function can throw errors.
  * @example <caption>spawnAdultPig.js</caption>
  *    test.spawn("minecraft:pig<minecraft:ageable_grow_up>", new BlockLocation(1, 2, 1));
  *    
  */
spawn (entityIdentifier, location) {
}
/**
  * Spawns an entity at a location.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>). 
  * @param {module:GameTest~Location} location - Location where the entity should be spawned. 
  * @returns {module:GameTest~Entity}
  * @throws This function can throw errors.
  * @example <caption>spawnAdultPig.js</caption>
  *    test.spawn("minecraft:pig<minecraft:ageable_grow_up>", new Location(1.5, 2, 1.5));
  */
spawnAtLocation (entityIdentifier, location) {
}
/**
  * Spawns an item entity at a specified location.
  *
  * @method
  * @param {module:GameTest~ItemStack} itemStack - ItemStack that describes the item entity to create. 
  * @param {module:GameTest~Location} position - Location to create the item entity at. 
  * @returns {module:GameTest~Entity}
  * @throws This function can throw errors.
  * @example <caption>spawnEmeralds.js</caption>
  *    const oneEmerald = new ItemStack(Items.emerald, 1, 0);
  *    const fiveEmeralds = new ItemStack(Items.emerald, 5, 0);
  *    
  *    test.spawnItem(oneEmerald, new Location(3.5, 3, 1.5));
  *    test.spawnItem(fiveEmeralds, new Location(1.5, 3, 1.5));
  *    
  */
spawnItem (itemStack, position) {
}
/**
  * Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions.
  *
  * @method
  * @param {string} entityIdentifier -  
  * @param {module:GameTest~BlockLocation} location -  
  * @returns {module:GameTest~Entity}
  * @throws This function can throw errors.
  */
spawnWithoutBehaviors (entityIdentifier, location) {
}
/**
  *
  * @method
  * @param {string} entityIdentifier -  
  * @param {module:GameTest~Location} location -  
  * @returns {module:GameTest~Entity}
  * @throws This function can throw errors.
  */
spawnWithoutBehaviorsAtLocation (entityIdentifier, location) {
}
/**
  * Tests that a particular item entity is present at a particular location. If not, an exception is thrown.
  *
  * @method
  * @param {module:GameTest~BlockLocation} location - BlockLocation containing a multiface block. 
  * @param {number} fromFace - Face to spread from. This face must already be set. 
  * @param {number} direction - Direction to spread. Use the Minecraft.Direction enum to specify a direction. 
  * @throws This function can throw errors.
  * @example <caption>spreadFromFaceTowardDirection.js</caption>
  *    test.spreadFromFaceTowardDirection(new BlockLocation(1, 2, 1), Direction.south, Direction.down);
  */
spreadFromFaceTowardDirection (location, fromFace, direction) {
}
/**
  * Creates a new GameTestSequence - A set of steps that play out sequentially within a GameTest.
  *
  * @method
  * @returns {module:GameTest~GameTestSequence}
  */
startSequence () {
}
/**
  * Marks the current test as a success case.
  *
  * @method
  * @throws This function can throw errors.
  */
succeed () {
}
/**
  * Runs the given callback. If the callback does not throw an exception, the test is marked as a success.
  *
  * @method
  * @param {function():undefined} callback - Callback function that runs. If the function runs successfully, the test is marked as a success. Typically, this function will have .assertXyz method calls within it. 
  * @throws This function can throw errors.
  */
succeedIf (callback) {
}
/**
  * Marks the test as a success at the specified tick.
  *
  * @method
  * @param {number} tick - Tick after the start of the GameTest to mark the test as successful. 
  * @throws This function can throw errors.
  */
succeedOnTick (tick) {
}
/**
  * Runs the given callback at _tick_ ticks after the start of the test. If the callback does not throw an exception, the test is marked as a failure.
  *
  * @method
  * @param {number} tick - Tick after the start of the GameTest to run the testing callback at. 
  * @param {function():undefined} callback - Callback function that runs. If the function runs successfully, the test is marked as a success. 
  * @throws This function can throw errors.
  */
succeedOnTickWhen (tick, callback) {
}
/**
  * Runs the given callback every tick. When the callback successfully executes, the test is marked as a success. Specifically, the test will succeed when the callback does not throw an exception.
  *
  * @method
  * @param {function():undefined} callback - Testing callback function that runs. If the function runs successfully, the test is marked as a success. 
  * @throws This function can throw errors.
  */
succeedWhen (callback) {
}
/**
  * Tests for the presence of a block of a particular type on every tick. When the specified block of a type is found, the test is marked as a success.
  *
  * @method
  * @param {module:GameTest~BlockType} blockType -  
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
succeedWhenBlockTypePresent (blockType, location) {
}
/**
  * Tests for the presence of a component on every tick. When the specified component is found, the test is marked as a success.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to look for. If no namespace is specified, 'minecraft:' is assumed. 
  * @param {string} componentIdentifier - Type of component to test for the presence of. If no namespace is specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~BlockLocation} location -  
  * @param {boolean} hasComponent -  
  * @throws This function can throw errors.
  */
succeedWhenEntityHasComponent (entityIdentifier, componentIdentifier, location, hasComponent) {
}
/**
  * Tests every tick and marks the test as a success when a particular entity is not present at a particular location.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
succeedWhenEntityNotPresent (entityIdentifier, location) {
}
/**
  * Tests for the presence of an entity on every tick. When an entity of the specified type is found, the test is marked as a success.
  *
  * @method
  * @param {string} entityIdentifier - Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed. 
  * @param {module:GameTest~BlockLocation} location -  
  * @throws This function can throw errors.
  */
succeedWhenEntityPresent (entityIdentifier, location) {
}
/**
  * Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
  *
  * @method
  * @param {module:GameTest~Entity} mob - Mob entity to give orders to. 
  * @param {module:GameTest~BlockLocation} location - Location where the entity should be walk to. 
  * @param {number} speedModifier - Adjustable modifier to the mob's walking speed. 
  * @throws This function can throw errors.
  */
walkTo (mob, location, speedModifier) {
}
/**
  * Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location.
  *
  * @method
  * @param {module:GameTest~Entity} mob - Mob entity to give orders to. 
  * @param {module:GameTest~Location} location - Location where the entity should be walk to. 
  * @param {number} speedModifier - Adjustable modifier to the mob's walking speed. 
  * @throws This function can throw errors.
  */
walkToLocation (mob, location, speedModifier) {
}
/**
  *
  * @method
  * @param {module:GameTest~BlockLocation} relativeLocation -  
  * @returns {module:GameTest~BlockLocation}
  * @throws This function can throw errors.
  */
worldBlockLocation (relativeLocation) {
}
/**
  * From a BlockLocation with coordinates relative to the GameTest structure block, returns a new BlockLocation with coordinates relative to world. Rotation of the GameTest structure is also taken into account.
  *
  * @method
  * @param {module:GameTest~Location} relativeLocation - Location relative to the GameTest command block. 
  * @returns {module:GameTest~Location}
  * @throws This function can throw errors.
  */
worldLocation (relativeLocation) {
}

     constructor() {
    }
  }
  
/** 
 * A utility class to set GameTest parameters for a test. Methods can be chained together to set multiple properties.
 * @hideconstructor
 * @class
 */
class RegistrationBuilder {
    
/**
  * Sets the batch for the test to run in.
  *
  * @method
  * @param {('night'|'day')} batchName - Name of the batch for the test. 
  * @returns {module:GameTest~RegistrationBuilder}
  */
batch (batchName) {
}
/**
  * Sets the maximum number of times a test will try to rerun if it fails.
  *
  * @method
  * @param {number} attemptCount -  
  * @returns {module:GameTest~RegistrationBuilder}
  */
maxAttempts (attemptCount) {
}
/**
  * Sets the maximum number of ticks a test will run for before timing out and failing.
  *
  * @method
  * @param {number} tickCount -  
  * @returns {module:GameTest~RegistrationBuilder}
  */
maxTicks (tickCount) {
}
/**
  * Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together.
  *
  * @method
  * @param {number} paddingBlocks - Size, in blocks, around the GameTest where additional GameTests should not be created. 
  * @returns {module:GameTest~RegistrationBuilder}
  */
padding (paddingBlocks) {
}
/**
  * Whether this test is required to pass as part of its broader set of tests.
  *
  * @method
  * @param {boolean} isRequired - If set to true, the test must pass in order for the entire run of tests to pass. 
  * @returns {module:GameTest~RegistrationBuilder}
  */
required (isRequired) {
}
/**
  * Sets the number of successful test runs to be considered successful.
  *
  * @method
  * @param {number} attemptCount -  
  * @returns {module:GameTest~RegistrationBuilder}
  */
requiredSuccessfulAttempts (attemptCount) {
}
/**
  * If true, runs the test in all four rotations when run via /gametest runset.
  *
  * @method
  * @param {boolean} rotate -  
  * @returns {module:GameTest~RegistrationBuilder}
  */
rotateTest (rotate) {
}
/**
  * Sets the number of ticks for a test to wait before executing when the structure is spawned.
  *
  * @method
  * @param {number} tickCount -  
  * @returns {module:GameTest~RegistrationBuilder}
  */
setupTicks (tickCount) {
}
/**
  * Sets the name of the structure for a test to use. "xyz:bar" will load `/structures/xyz/bar.mcstructure` from the behavior pack stack.
  *
  * @method
  * @param {string} structureName -  
  * @returns {module:GameTest~RegistrationBuilder}
  */
structureName (structureName) {
}
/**
  * Adds a tag to a test. You can run all tests with a given tag with `/gametest runset <tag>`.
  *
  * @method
  * @param {string} tag -  
  * @returns {module:GameTest~RegistrationBuilder}
  */
tag (tag) {
}

     constructor() {
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class ScriptGameTestConnectivity {
    /**
      * @name ScriptGameTestConnectivity#east
      * @type {boolean}
      */
    /**
      * @name ScriptGameTestConnectivity#north
      * @type {boolean}
      */
    /**
      * @name ScriptGameTestConnectivity#south
      * @type {boolean}
      */
    /**
      * @name ScriptGameTestConnectivity#west
      * @type {boolean}
      */
    

     constructor() {
      /**
        * 
        * @type {boolean}
        */
      this['east'];
      /**
        * 
        * @type {boolean}
        */
      this['north'];
      /**
        * 
        * @type {boolean}
        */
      this['south'];
      /**
        * 
        * @type {boolean}
        */
      this['west'];
    }
  }
  
/** 
 * @hideconstructor
 * @class
 */
class Tags {
    /**
      * @name Tags#suiteAll
      * @type {string}
      */
    /**
      * @name Tags#suiteDebug
      * @type {string}
      */
    /**
      * @name Tags#suiteDefault
      * @type {string}
      */
    /**
      * @name Tags#suiteDisabled
      * @type {string}
      */
    

     constructor() {
      /**
        * 
        * @type {string}
        */
      this['suiteAll'];
      /**
        * 
        * @type {string}
        */
      this['suiteDebug'];
      /**
        * 
        * @type {string}
        */
      this['suiteDefault'];
      /**
        * 
        * @type {string}
        */
      this['suiteDisabled'];
    }
  }
  

/**
  * Registers a new GameTest function. This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
  *
  * @method
  * @param {string} testClassName - Name of the class of tests this test should be a part of. 
  * @param {string} testName - Name of this specific test. 
  * @param {function(module:GameTest~Helper):undefined} testFunction - Implementation of the test function. 
  * @returns {module:GameTest~RegistrationBuilder}
  * @example <caption>example1.js</caption>
  *    GameTest.register("ExampleTests", "alwaysFail", (test) => {
  *      test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
  *    });
  *    
  */
function register (testClassName, testName, testFunction) {
}
