'use strict';

/**
 * In typescrypt the node kind is an enum, which is translated to a number
 * when it is transpiled to JavaScript. Since this is not very good for the
 * output of the AST, we have to keep a mapping between these values and
 * their name and replace the kind with its name in the AST.
 *
 * @constant
 * @type {Array<String>}
 * @see {@link https://github.com/Microsoft/TypeScript/blob/a29e8cf2406dd41aea48be0fb68cde6a2e972564/src/compiler/types.ts#L52-L428|Original definition}
 */
module.exports = [
  'Unknown',
  'EndOfFileToken',
  'SingleLineCommentTrivia',
  'MultiLineCommentTrivia',
  'NewLineTrivia',
  'WhitespaceTrivia',
  'ShebangTrivia',
  'ConflictMarkerTrivia',
  'NumericLiteral',
  'StringLiteral',
  'JsxText',
  'RegularExpressionLiteral',
  'NoSubstitutionTemplateLiteral',
  'TemplateHead',
  'TemplateMiddle',
  'TemplateTail',
  'OpenBraceToken',
  'CloseBraceToken',
  'OpenParenToken',
  'CloseParenToken',
  'OpenBracketToken',
  'CloseBracketToken',
  'DotToken',
  'DotDotDotToken',
  'SemicolonToken',
  'CommaToken',
  'LessThanToken',
  'LessThanSlashToken',
  'GreaterThanToken',
  'LessThanEqualsToken',
  'GreaterThanEqualsToken',
  'EqualsEqualsToken',
  'ExclamationEqualsToken',
  'EqualsEqualsEqualsToken',
  'ExclamationEqualsEqualsToken',
  'EqualsGreaterThanToken',
  'PlusToken',
  'MinusToken',
  'AsteriskToken',
  'AsteriskAsteriskToken',
  'SlashToken',
  'PercentToken',
  'PlusPlusToken',
  'MinusMinusToken',
  'LessThanLessThanToken',
  'GreaterThanGreaterThanToken',
  'GreaterThanGreaterThanGreaterThanToken',
  'AmpersandToken',
  'BarToken',
  'CaretToken',
  'ExclamationToken',
  'TildeToken',
  'AmpersandAmpersandToken',
  'BarBarToken',
  'QuestionToken',
  'ColonToken',
  'AtToken',
  'EqualsToken',
  'PlusEqualsToken',
  'MinusEqualsToken',
  'AsteriskEqualsToken',
  'AsteriskAsteriskEqualsToken',
  'SlashEqualsToken',
  'PercentEqualsToken',
  'LessThanLessThanEqualsToken',
  'GreaterThanGreaterThanEqualsToken',
  'GreaterThanGreaterThanGreaterThanEqualsToken',
  'AmpersandEqualsToken',
  'BarEqualsToken',
  'CaretEqualsToken',
  'Identifier',
  'BreakKeyword',
  'CaseKeyword',
  'CatchKeyword',
  'ClassKeyword',
  'ConstKeyword',
  'ContinueKeyword',
  'DebuggerKeyword',
  'DefaultKeyword',
  'DeleteKeyword',
  'DoKeyword',
  'ElseKeyword',
  'EnumKeyword',
  'ExportKeyword',
  'ExtendsKeyword',
  'FalseKeyword',
  'FinallyKeyword',
  'ForKeyword',
  'FunctionKeyword',
  'IfKeyword',
  'ImportKeyword',
  'InKeyword',
  'InstanceOfKeyword',
  'NewKeyword',
  'NullKeyword',
  'ReturnKeyword',
  'SuperKeyword',
  'SwitchKeyword',
  'ThisKeyword',
  'ThrowKeyword',
  'TrueKeyword',
  'TryKeyword',
  'TypeOfKeyword',
  'VarKeyword',
  'VoidKeyword',
  'WhileKeyword',
  'WithKeyword',
  'ImplementsKeyword',
  'InterfaceKeyword',
  'LetKeyword',
  'PackageKeyword',
  'PrivateKeyword',
  'ProtectedKeyword',
  'PublicKeyword',
  'StaticKeyword',
  'YieldKeyword',
  'AbstractKeyword',
  'AsKeyword',
  'AnyKeyword',
  'AsyncKeyword',
  'AwaitKeyword',
  'BooleanKeyword',
  'ConstructorKeyword',
  'DeclareKeyword',
  'GetKeyword',
  'IsKeyword',
  'KeyOfKeyword',
  'ModuleKeyword',
  'NamespaceKeyword',
  'NeverKeyword',
  'ReadonlyKeyword',
  'RequireKeyword',
  'NumberKeyword',
  'ObjectKeyword',
  'SetKeyword',
  'StringKeyword',
  'SymbolKeyword',
  'TypeKeyword',
  'UndefinedKeyword',
  'FromKeyword',
  'GlobalKeyword',
  'OfKeyword',
  'QualifiedName',
  'ComputedPropertyName',
  'TypeParameter',
  'Parameter',
  'Decorator',
  'PropertySignature',
  'PropertyDeclaration',
  'MethodSignature',
  'MethodDeclaration',
  'Constructor',
  'GetAccessor',
  'SetAccessor',
  'CallSignature',
  'ConstructSignature',
  'IndexSignature',
  'TypePredicate',
  'TypeReference',
  'FunctionType',
  'ConstructorType',
  'TypeQuery',
  'TypeLiteral',
  'ArrayType',
  'TupleType',
  'UnionType',
  'IntersectionType',
  'ParenthesizedType',
  'ThisType',
  'TypeOperator',
  'IndexedAccessType',
  'MappedType',
  'LiteralType',
  'ObjectBindingPattern',
  'ArrayBindingPattern',
  'BindingElement',
  'ArrayLiteralExpression',
  'ObjectLiteralExpression',
  'PropertyAccessExpression',
  'ElementAccessExpression',
  'CallExpression',
  'NewExpression',
  'TaggedTemplateExpression',
  'TypeAssertionExpression',
  'ParenthesizedExpression',
  'FunctionExpression',
  'ArrowFunction',
  'DeleteExpression',
  'TypeOfExpression',
  'VoidExpression',
  'AwaitExpression',
  'PrefixUnaryExpression',
  'PostfixUnaryExpression',
  'BinaryExpression',
  'ConditionalExpression',
  'TemplateExpression',
  'YieldExpression',
  'SpreadElement',
  'ClassExpression',
  'OmittedExpression',
  'ExpressionWithTypeArguments',
  'AsExpression',
  'NonNullExpression',
  'MetaProperty',
  'TemplateSpan',
  'SemicolonClassElement',
  'Block',
  'VariableStatement',
  'EmptyStatement',
  'ExpressionStatement',
  'IfStatement',
  'DoStatement',
  'WhileStatement',
  'ForStatement',
  'ForInStatement',
  'ForOfStatement',
  'ContinueStatement',
  'BreakStatement',
  'ReturnStatement',
  'WithStatement',
  'SwitchStatement',
  'LabeledStatement',
  'ThrowStatement',
  'TryStatement',
  'DebuggerStatement',
  'VariableDeclaration',
  'VariableDeclarationList',
  'FunctionDeclaration',
  'ClassDeclaration',
  'InterfaceDeclaration',
  'TypeAliasDeclaration',
  'EnumDeclaration',
  'ModuleDeclaration',
  'ModuleBlock',
  'CaseBlock',
  'NamespaceExportDeclaration',
  'ImportEqualsDeclaration',
  'ImportDeclaration',
  'ImportClause',
  'NamespaceImport',
  'NamedImports',
  'ImportSpecifier',
  'ExportAssignment',
  'ExportDeclaration',
  'NamedExports',
  'ExportSpecifier',
  'MissingDeclaration',
  'ExternalModuleReference',
  'JsxElement',
  'JsxSelfClosingElement',
  'JsxOpeningElement',
  'JsxClosingElement',
  'JsxAttribute',
  'JsxSpreadAttribute',
  'JsxExpression',
  'CaseClause',
  'DefaultClause',
  'HeritageClause',
  'CatchClause',
  'PropertyAssignment',
  'ShorthandPropertyAssignment',
  'SpreadAssignment',
  'EnumMember',
  'SourceFile',
  'Bundle',
  'JSDocTypeExpression',
  'JSDocAllType',
  'JSDocUnknownType',
  'JSDocArrayType',
  'JSDocUnionType',
  'JSDocTupleType',
  'JSDocNullableType',
  'JSDocNonNullableType',
  'JSDocRecordType',
  'JSDocRecordMember',
  'JSDocTypeReference',
  'JSDocOptionalType',
  'JSDocFunctionType',
  'JSDocVariadicType',
  'JSDocConstructorType',
  'JSDocThisType',
  'JSDocComment',
  'JSDocTag',
  'JSDocAugmentsTag',
  'JSDocParameterTag',
  'JSDocReturnTag',
  'JSDocTypeTag',
  'JSDocTemplateTag',
  'JSDocTypedefTag',
  'JSDocPropertyTag',
  'JSDocTypeLiteral',
  'JSDocLiteralType',
  'JSDocNullKeyword',
  'JSDocUndefinedKeyword',
  'JSDocNeverKeyword',
  'SyntaxList',
  'NotEmittedStatement',
  'PartiallyEmittedExpression',
  'MergeDeclarationMarker',
  'EndOfDeclarationMarker',
  'Count',
  'FirstAssignment',
  'LastAssignment',
  'FirstCompoundAssignment',
  'LastCompoundAssignment',
  'FirstReservedWord',
  'LastReservedWord',
  'FirstKeyword',
  'LastKeyword',
  'FirstFutureReservedWord',
  'LastFutureReservedWord',
  'FirstTypeNode',
  'LastTypeNode',
  'FirstPunctuation',
  'LastPunctuation',
  'FirstToken',
  'LastToken',
  'FirstTriviaToken',
  'LastTriviaToken',
  'FirstLiteralToken',
  'LastLiteralToken',
  'FirstTemplateToken',
  'LastTemplateToken',
  'FirstBinaryOperator',
  'LastBinaryOperator',
  'FirstNode',
  'FirstJSDocNode',
  'LastJSDocNode',
  'FirstJSDocTagNode',
  'LastJSDocTagNode'
];

