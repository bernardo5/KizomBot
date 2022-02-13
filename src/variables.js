exports.START_COMMAND = '/start';
exports.PARTY_COMMAND = '/party';
exports.CLASSES_COMMAND = '/classes';
exports.AVAILABLE_COMMANDS = [
    {
        command: exports.START_COMMAND,
        description: 'check available commands'
    },
    {
        command: exports.PARTY_COMMAND,
        description: 'lists the parties happening next week'
    },
    {
        command: exports.CLASSES_COMMAND,
        description: 'lists the places where you can take dance classes'
    }
];