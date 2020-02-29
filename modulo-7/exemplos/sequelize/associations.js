const A = sequelize.define('A', /* ... */);
const B = sequelize.define('B', /* ... */);

// The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).
A.hasOne(B); // A HasOne B

// The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
A.belongsTo(B); // A BelongsTo B

// The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
A.hasMany(B); // A HasMany B

// The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B, using table C as junction table, which will have the foreign keys (aId and bId, for example). Sequelize will automatically create this model C (unless it already exists) and define the appropriate foreign keys on it.
A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C