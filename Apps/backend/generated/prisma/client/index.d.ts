
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Songlist
 * 
 */
export type Songlist = $Result.DefaultSelection<Prisma.$SonglistPayload>
/**
 * Model SongCollection
 * 
 */
export type SongCollection = $Result.DefaultSelection<Prisma.$SongCollectionPayload>
/**
 * Model SongItem
 * 
 */
export type SongItem = $Result.DefaultSelection<Prisma.$SongItemPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model SongArtist
 * 
 */
export type SongArtist = $Result.DefaultSelection<Prisma.$SongArtistPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model SongGenre
 * 
 */
export type SongGenre = $Result.DefaultSelection<Prisma.$SongGenrePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songlist`: Exposes CRUD operations for the **Songlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Songlists
    * const songlists = await prisma.songlist.findMany()
    * ```
    */
  get songlist(): Prisma.SonglistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songCollection`: Exposes CRUD operations for the **SongCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongCollections
    * const songCollections = await prisma.songCollection.findMany()
    * ```
    */
  get songCollection(): Prisma.SongCollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songItem`: Exposes CRUD operations for the **SongItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongItems
    * const songItems = await prisma.songItem.findMany()
    * ```
    */
  get songItem(): Prisma.SongItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songArtist`: Exposes CRUD operations for the **SongArtist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongArtists
    * const songArtists = await prisma.songArtist.findMany()
    * ```
    */
  get songArtist(): Prisma.SongArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.songGenre`: Exposes CRUD operations for the **SongGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SongGenres
    * const songGenres = await prisma.songGenre.findMany()
    * ```
    */
  get songGenre(): Prisma.SongGenreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Songlist: 'Songlist',
    SongCollection: 'SongCollection',
    SongItem: 'SongItem',
    Link: 'Link',
    SongArtist: 'SongArtist',
    Artist: 'Artist',
    Genre: 'Genre',
    SongGenre: 'SongGenre'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "songlist" | "songCollection" | "songItem" | "link" | "songArtist" | "artist" | "genre" | "songGenre"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Songlist: {
        payload: Prisma.$SonglistPayload<ExtArgs>
        fields: Prisma.SonglistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SonglistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SonglistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>
          }
          findFirst: {
            args: Prisma.SonglistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SonglistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>
          }
          findMany: {
            args: Prisma.SonglistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>[]
          }
          create: {
            args: Prisma.SonglistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>
          }
          createMany: {
            args: Prisma.SonglistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SonglistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>[]
          }
          delete: {
            args: Prisma.SonglistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>
          }
          update: {
            args: Prisma.SonglistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>
          }
          deleteMany: {
            args: Prisma.SonglistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SonglistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SonglistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>[]
          }
          upsert: {
            args: Prisma.SonglistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SonglistPayload>
          }
          aggregate: {
            args: Prisma.SonglistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSonglist>
          }
          groupBy: {
            args: Prisma.SonglistGroupByArgs<ExtArgs>
            result: $Utils.Optional<SonglistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SonglistCountArgs<ExtArgs>
            result: $Utils.Optional<SonglistCountAggregateOutputType> | number
          }
        }
      }
      SongCollection: {
        payload: Prisma.$SongCollectionPayload<ExtArgs>
        fields: Prisma.SongCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongCollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongCollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>
          }
          findFirst: {
            args: Prisma.SongCollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongCollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>
          }
          findMany: {
            args: Prisma.SongCollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>[]
          }
          create: {
            args: Prisma.SongCollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>
          }
          createMany: {
            args: Prisma.SongCollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongCollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>[]
          }
          delete: {
            args: Prisma.SongCollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>
          }
          update: {
            args: Prisma.SongCollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>
          }
          deleteMany: {
            args: Prisma.SongCollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongCollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongCollectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>[]
          }
          upsert: {
            args: Prisma.SongCollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongCollectionPayload>
          }
          aggregate: {
            args: Prisma.SongCollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongCollection>
          }
          groupBy: {
            args: Prisma.SongCollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongCollectionCountArgs<ExtArgs>
            result: $Utils.Optional<SongCollectionCountAggregateOutputType> | number
          }
        }
      }
      SongItem: {
        payload: Prisma.$SongItemPayload<ExtArgs>
        fields: Prisma.SongItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>
          }
          findFirst: {
            args: Prisma.SongItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>
          }
          findMany: {
            args: Prisma.SongItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>[]
          }
          create: {
            args: Prisma.SongItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>
          }
          createMany: {
            args: Prisma.SongItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>[]
          }
          delete: {
            args: Prisma.SongItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>
          }
          update: {
            args: Prisma.SongItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>
          }
          deleteMany: {
            args: Prisma.SongItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>[]
          }
          upsert: {
            args: Prisma.SongItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongItemPayload>
          }
          aggregate: {
            args: Prisma.SongItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongItem>
          }
          groupBy: {
            args: Prisma.SongItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongItemCountArgs<ExtArgs>
            result: $Utils.Optional<SongItemCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      SongArtist: {
        payload: Prisma.$SongArtistPayload<ExtArgs>
        fields: Prisma.SongArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>
          }
          findFirst: {
            args: Prisma.SongArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>
          }
          findMany: {
            args: Prisma.SongArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>[]
          }
          create: {
            args: Prisma.SongArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>
          }
          createMany: {
            args: Prisma.SongArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>[]
          }
          delete: {
            args: Prisma.SongArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>
          }
          update: {
            args: Prisma.SongArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>
          }
          deleteMany: {
            args: Prisma.SongArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>[]
          }
          upsert: {
            args: Prisma.SongArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongArtistPayload>
          }
          aggregate: {
            args: Prisma.SongArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongArtist>
          }
          groupBy: {
            args: Prisma.SongArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongArtistCountArgs<ExtArgs>
            result: $Utils.Optional<SongArtistCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      SongGenre: {
        payload: Prisma.$SongGenrePayload<ExtArgs>
        fields: Prisma.SongGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SongGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SongGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>
          }
          findFirst: {
            args: Prisma.SongGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SongGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>
          }
          findMany: {
            args: Prisma.SongGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>[]
          }
          create: {
            args: Prisma.SongGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>
          }
          createMany: {
            args: Prisma.SongGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SongGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>[]
          }
          delete: {
            args: Prisma.SongGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>
          }
          update: {
            args: Prisma.SongGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>
          }
          deleteMany: {
            args: Prisma.SongGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SongGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SongGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>[]
          }
          upsert: {
            args: Prisma.SongGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SongGenrePayload>
          }
          aggregate: {
            args: Prisma.SongGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSongGenre>
          }
          groupBy: {
            args: Prisma.SongGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SongGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.SongGenreCountArgs<ExtArgs>
            result: $Utils.Optional<SongGenreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    songlist?: SonglistOmit
    songCollection?: SongCollectionOmit
    songItem?: SongItemOmit
    link?: LinkOmit
    songArtist?: SongArtistOmit
    artist?: ArtistOmit
    genre?: GenreOmit
    songGenre?: SongGenreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    songlists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songlists?: boolean | UserCountOutputTypeCountSonglistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSonglistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SonglistWhereInput
  }


  /**
   * Count Type SonglistCountOutputType
   */

  export type SonglistCountOutputType = {
    songs: number
  }

  export type SonglistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | SonglistCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * SonglistCountOutputType without action
   */
  export type SonglistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SonglistCountOutputType
     */
    select?: SonglistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SonglistCountOutputType without action
   */
  export type SonglistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongCollectionWhereInput
  }


  /**
   * Count Type SongItemCountOutputType
   */

  export type SongItemCountOutputType = {
    links: number
    artists: number
    genres: number
    songs: number
  }

  export type SongItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | SongItemCountOutputTypeCountLinksArgs
    artists?: boolean | SongItemCountOutputTypeCountArtistsArgs
    genres?: boolean | SongItemCountOutputTypeCountGenresArgs
    songs?: boolean | SongItemCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * SongItemCountOutputType without action
   */
  export type SongItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItemCountOutputType
     */
    select?: SongItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SongItemCountOutputType without action
   */
  export type SongItemCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * SongItemCountOutputType without action
   */
  export type SongItemCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongArtistWhereInput
  }

  /**
   * SongItemCountOutputType without action
   */
  export type SongItemCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongGenreWhereInput
  }

  /**
   * SongItemCountOutputType without action
   */
  export type SongItemCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongCollectionWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    songs: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | ArtistCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongArtistWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    songs: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | GenreCountOutputTypeCountSongsArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountSongsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongGenreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songlists?: boolean | User$songlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songlists?: boolean | User$songlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      songlists: Prisma.$SonglistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songlists<T extends User$songlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$songlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.songlists
   */
  export type User$songlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    where?: SonglistWhereInput
    orderBy?: SonglistOrderByWithRelationInput | SonglistOrderByWithRelationInput[]
    cursor?: SonglistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SonglistScalarFieldEnum | SonglistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Songlist
   */

  export type AggregateSonglist = {
    _count: SonglistCountAggregateOutputType | null
    _min: SonglistMinAggregateOutputType | null
    _max: SonglistMaxAggregateOutputType | null
  }

  export type SonglistMinAggregateOutputType = {
    id: string | null
    name: string | null
    visibility: string | null
    description: string | null
    cover: string | null
    userId: string | null
  }

  export type SonglistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    visibility: string | null
    description: string | null
    cover: string | null
    userId: string | null
  }

  export type SonglistCountAggregateOutputType = {
    id: number
    name: number
    visibility: number
    description: number
    cover: number
    userId: number
    _all: number
  }


  export type SonglistMinAggregateInputType = {
    id?: true
    name?: true
    visibility?: true
    description?: true
    cover?: true
    userId?: true
  }

  export type SonglistMaxAggregateInputType = {
    id?: true
    name?: true
    visibility?: true
    description?: true
    cover?: true
    userId?: true
  }

  export type SonglistCountAggregateInputType = {
    id?: true
    name?: true
    visibility?: true
    description?: true
    cover?: true
    userId?: true
    _all?: true
  }

  export type SonglistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songlist to aggregate.
     */
    where?: SonglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songlists to fetch.
     */
    orderBy?: SonglistOrderByWithRelationInput | SonglistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SonglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Songlists
    **/
    _count?: true | SonglistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SonglistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SonglistMaxAggregateInputType
  }

  export type GetSonglistAggregateType<T extends SonglistAggregateArgs> = {
        [P in keyof T & keyof AggregateSonglist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSonglist[P]>
      : GetScalarType<T[P], AggregateSonglist[P]>
  }




  export type SonglistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SonglistWhereInput
    orderBy?: SonglistOrderByWithAggregationInput | SonglistOrderByWithAggregationInput[]
    by: SonglistScalarFieldEnum[] | SonglistScalarFieldEnum
    having?: SonglistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SonglistCountAggregateInputType | true
    _min?: SonglistMinAggregateInputType
    _max?: SonglistMaxAggregateInputType
  }

  export type SonglistGroupByOutputType = {
    id: string
    name: string
    visibility: string
    description: string | null
    cover: string | null
    userId: string
    _count: SonglistCountAggregateOutputType | null
    _min: SonglistMinAggregateOutputType | null
    _max: SonglistMaxAggregateOutputType | null
  }

  type GetSonglistGroupByPayload<T extends SonglistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SonglistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SonglistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SonglistGroupByOutputType[P]>
            : GetScalarType<T[P], SonglistGroupByOutputType[P]>
        }
      >
    >


  export type SonglistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    visibility?: boolean
    description?: boolean
    cover?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Songlist$songsArgs<ExtArgs>
    _count?: boolean | SonglistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songlist"]>

  export type SonglistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    visibility?: boolean
    description?: boolean
    cover?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songlist"]>

  export type SonglistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    visibility?: boolean
    description?: boolean
    cover?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songlist"]>

  export type SonglistSelectScalar = {
    id?: boolean
    name?: boolean
    visibility?: boolean
    description?: boolean
    cover?: boolean
    userId?: boolean
  }

  export type SonglistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "visibility" | "description" | "cover" | "userId", ExtArgs["result"]["songlist"]>
  export type SonglistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    songs?: boolean | Songlist$songsArgs<ExtArgs>
    _count?: boolean | SonglistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SonglistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SonglistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SonglistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Songlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      songs: Prisma.$SongCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      visibility: string
      description: string | null
      cover: string | null
      userId: string
    }, ExtArgs["result"]["songlist"]>
    composites: {}
  }

  type SonglistGetPayload<S extends boolean | null | undefined | SonglistDefaultArgs> = $Result.GetResult<Prisma.$SonglistPayload, S>

  type SonglistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SonglistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SonglistCountAggregateInputType | true
    }

  export interface SonglistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Songlist'], meta: { name: 'Songlist' } }
    /**
     * Find zero or one Songlist that matches the filter.
     * @param {SonglistFindUniqueArgs} args - Arguments to find a Songlist
     * @example
     * // Get one Songlist
     * const songlist = await prisma.songlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SonglistFindUniqueArgs>(args: SelectSubset<T, SonglistFindUniqueArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Songlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SonglistFindUniqueOrThrowArgs} args - Arguments to find a Songlist
     * @example
     * // Get one Songlist
     * const songlist = await prisma.songlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SonglistFindUniqueOrThrowArgs>(args: SelectSubset<T, SonglistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Songlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SonglistFindFirstArgs} args - Arguments to find a Songlist
     * @example
     * // Get one Songlist
     * const songlist = await prisma.songlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SonglistFindFirstArgs>(args?: SelectSubset<T, SonglistFindFirstArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Songlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SonglistFindFirstOrThrowArgs} args - Arguments to find a Songlist
     * @example
     * // Get one Songlist
     * const songlist = await prisma.songlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SonglistFindFirstOrThrowArgs>(args?: SelectSubset<T, SonglistFindFirstOrThrowArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Songlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SonglistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Songlists
     * const songlists = await prisma.songlist.findMany()
     * 
     * // Get first 10 Songlists
     * const songlists = await prisma.songlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songlistWithIdOnly = await prisma.songlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SonglistFindManyArgs>(args?: SelectSubset<T, SonglistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Songlist.
     * @param {SonglistCreateArgs} args - Arguments to create a Songlist.
     * @example
     * // Create one Songlist
     * const Songlist = await prisma.songlist.create({
     *   data: {
     *     // ... data to create a Songlist
     *   }
     * })
     * 
     */
    create<T extends SonglistCreateArgs>(args: SelectSubset<T, SonglistCreateArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Songlists.
     * @param {SonglistCreateManyArgs} args - Arguments to create many Songlists.
     * @example
     * // Create many Songlists
     * const songlist = await prisma.songlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SonglistCreateManyArgs>(args?: SelectSubset<T, SonglistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Songlists and returns the data saved in the database.
     * @param {SonglistCreateManyAndReturnArgs} args - Arguments to create many Songlists.
     * @example
     * // Create many Songlists
     * const songlist = await prisma.songlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Songlists and only return the `id`
     * const songlistWithIdOnly = await prisma.songlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SonglistCreateManyAndReturnArgs>(args?: SelectSubset<T, SonglistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Songlist.
     * @param {SonglistDeleteArgs} args - Arguments to delete one Songlist.
     * @example
     * // Delete one Songlist
     * const Songlist = await prisma.songlist.delete({
     *   where: {
     *     // ... filter to delete one Songlist
     *   }
     * })
     * 
     */
    delete<T extends SonglistDeleteArgs>(args: SelectSubset<T, SonglistDeleteArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Songlist.
     * @param {SonglistUpdateArgs} args - Arguments to update one Songlist.
     * @example
     * // Update one Songlist
     * const songlist = await prisma.songlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SonglistUpdateArgs>(args: SelectSubset<T, SonglistUpdateArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Songlists.
     * @param {SonglistDeleteManyArgs} args - Arguments to filter Songlists to delete.
     * @example
     * // Delete a few Songlists
     * const { count } = await prisma.songlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SonglistDeleteManyArgs>(args?: SelectSubset<T, SonglistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SonglistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Songlists
     * const songlist = await prisma.songlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SonglistUpdateManyArgs>(args: SelectSubset<T, SonglistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Songlists and returns the data updated in the database.
     * @param {SonglistUpdateManyAndReturnArgs} args - Arguments to update many Songlists.
     * @example
     * // Update many Songlists
     * const songlist = await prisma.songlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Songlists and only return the `id`
     * const songlistWithIdOnly = await prisma.songlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SonglistUpdateManyAndReturnArgs>(args: SelectSubset<T, SonglistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Songlist.
     * @param {SonglistUpsertArgs} args - Arguments to update or create a Songlist.
     * @example
     * // Update or create a Songlist
     * const songlist = await prisma.songlist.upsert({
     *   create: {
     *     // ... data to create a Songlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Songlist we want to update
     *   }
     * })
     */
    upsert<T extends SonglistUpsertArgs>(args: SelectSubset<T, SonglistUpsertArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Songlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SonglistCountArgs} args - Arguments to filter Songlists to count.
     * @example
     * // Count the number of Songlists
     * const count = await prisma.songlist.count({
     *   where: {
     *     // ... the filter for the Songlists we want to count
     *   }
     * })
    **/
    count<T extends SonglistCountArgs>(
      args?: Subset<T, SonglistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SonglistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Songlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SonglistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SonglistAggregateArgs>(args: Subset<T, SonglistAggregateArgs>): Prisma.PrismaPromise<GetSonglistAggregateType<T>>

    /**
     * Group by Songlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SonglistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SonglistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SonglistGroupByArgs['orderBy'] }
        : { orderBy?: SonglistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SonglistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSonglistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Songlist model
   */
  readonly fields: SonglistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Songlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SonglistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    songs<T extends Songlist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Songlist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Songlist model
   */
  interface SonglistFieldRefs {
    readonly id: FieldRef<"Songlist", 'String'>
    readonly name: FieldRef<"Songlist", 'String'>
    readonly visibility: FieldRef<"Songlist", 'String'>
    readonly description: FieldRef<"Songlist", 'String'>
    readonly cover: FieldRef<"Songlist", 'String'>
    readonly userId: FieldRef<"Songlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Songlist findUnique
   */
  export type SonglistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * Filter, which Songlist to fetch.
     */
    where: SonglistWhereUniqueInput
  }

  /**
   * Songlist findUniqueOrThrow
   */
  export type SonglistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * Filter, which Songlist to fetch.
     */
    where: SonglistWhereUniqueInput
  }

  /**
   * Songlist findFirst
   */
  export type SonglistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * Filter, which Songlist to fetch.
     */
    where?: SonglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songlists to fetch.
     */
    orderBy?: SonglistOrderByWithRelationInput | SonglistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songlists.
     */
    cursor?: SonglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songlists.
     */
    distinct?: SonglistScalarFieldEnum | SonglistScalarFieldEnum[]
  }

  /**
   * Songlist findFirstOrThrow
   */
  export type SonglistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * Filter, which Songlist to fetch.
     */
    where?: SonglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songlists to fetch.
     */
    orderBy?: SonglistOrderByWithRelationInput | SonglistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Songlists.
     */
    cursor?: SonglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songlists.
     */
    distinct?: SonglistScalarFieldEnum | SonglistScalarFieldEnum[]
  }

  /**
   * Songlist findMany
   */
  export type SonglistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * Filter, which Songlists to fetch.
     */
    where?: SonglistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Songlists to fetch.
     */
    orderBy?: SonglistOrderByWithRelationInput | SonglistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Songlists.
     */
    cursor?: SonglistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Songlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Songlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Songlists.
     */
    distinct?: SonglistScalarFieldEnum | SonglistScalarFieldEnum[]
  }

  /**
   * Songlist create
   */
  export type SonglistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * The data needed to create a Songlist.
     */
    data: XOR<SonglistCreateInput, SonglistUncheckedCreateInput>
  }

  /**
   * Songlist createMany
   */
  export type SonglistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Songlists.
     */
    data: SonglistCreateManyInput | SonglistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Songlist createManyAndReturn
   */
  export type SonglistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * The data used to create many Songlists.
     */
    data: SonglistCreateManyInput | SonglistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Songlist update
   */
  export type SonglistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * The data needed to update a Songlist.
     */
    data: XOR<SonglistUpdateInput, SonglistUncheckedUpdateInput>
    /**
     * Choose, which Songlist to update.
     */
    where: SonglistWhereUniqueInput
  }

  /**
   * Songlist updateMany
   */
  export type SonglistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Songlists.
     */
    data: XOR<SonglistUpdateManyMutationInput, SonglistUncheckedUpdateManyInput>
    /**
     * Filter which Songlists to update
     */
    where?: SonglistWhereInput
    /**
     * Limit how many Songlists to update.
     */
    limit?: number
  }

  /**
   * Songlist updateManyAndReturn
   */
  export type SonglistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * The data used to update Songlists.
     */
    data: XOR<SonglistUpdateManyMutationInput, SonglistUncheckedUpdateManyInput>
    /**
     * Filter which Songlists to update
     */
    where?: SonglistWhereInput
    /**
     * Limit how many Songlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Songlist upsert
   */
  export type SonglistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * The filter to search for the Songlist to update in case it exists.
     */
    where: SonglistWhereUniqueInput
    /**
     * In case the Songlist found by the `where` argument doesn't exist, create a new Songlist with this data.
     */
    create: XOR<SonglistCreateInput, SonglistUncheckedCreateInput>
    /**
     * In case the Songlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SonglistUpdateInput, SonglistUncheckedUpdateInput>
  }

  /**
   * Songlist delete
   */
  export type SonglistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
    /**
     * Filter which Songlist to delete.
     */
    where: SonglistWhereUniqueInput
  }

  /**
   * Songlist deleteMany
   */
  export type SonglistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Songlists to delete
     */
    where?: SonglistWhereInput
    /**
     * Limit how many Songlists to delete.
     */
    limit?: number
  }

  /**
   * Songlist.songs
   */
  export type Songlist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    where?: SongCollectionWhereInput
    orderBy?: SongCollectionOrderByWithRelationInput | SongCollectionOrderByWithRelationInput[]
    cursor?: SongCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongCollectionScalarFieldEnum | SongCollectionScalarFieldEnum[]
  }

  /**
   * Songlist without action
   */
  export type SonglistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Songlist
     */
    select?: SonglistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Songlist
     */
    omit?: SonglistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SonglistInclude<ExtArgs> | null
  }


  /**
   * Model SongCollection
   */

  export type AggregateSongCollection = {
    _count: SongCollectionCountAggregateOutputType | null
    _avg: SongCollectionAvgAggregateOutputType | null
    _sum: SongCollectionSumAggregateOutputType | null
    _min: SongCollectionMinAggregateOutputType | null
    _max: SongCollectionMaxAggregateOutputType | null
  }

  export type SongCollectionAvgAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type SongCollectionSumAggregateOutputType = {
    id: number | null
    songId: number | null
  }

  export type SongCollectionMinAggregateOutputType = {
    id: number | null
    songId: number | null
    songlistId: string | null
    createdAt: Date | null
  }

  export type SongCollectionMaxAggregateOutputType = {
    id: number | null
    songId: number | null
    songlistId: string | null
    createdAt: Date | null
  }

  export type SongCollectionCountAggregateOutputType = {
    id: number
    songId: number
    songlistId: number
    createdAt: number
    _all: number
  }


  export type SongCollectionAvgAggregateInputType = {
    id?: true
    songId?: true
  }

  export type SongCollectionSumAggregateInputType = {
    id?: true
    songId?: true
  }

  export type SongCollectionMinAggregateInputType = {
    id?: true
    songId?: true
    songlistId?: true
    createdAt?: true
  }

  export type SongCollectionMaxAggregateInputType = {
    id?: true
    songId?: true
    songlistId?: true
    createdAt?: true
  }

  export type SongCollectionCountAggregateInputType = {
    id?: true
    songId?: true
    songlistId?: true
    createdAt?: true
    _all?: true
  }

  export type SongCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongCollection to aggregate.
     */
    where?: SongCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongCollections to fetch.
     */
    orderBy?: SongCollectionOrderByWithRelationInput | SongCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongCollections
    **/
    _count?: true | SongCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongCollectionMaxAggregateInputType
  }

  export type GetSongCollectionAggregateType<T extends SongCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSongCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongCollection[P]>
      : GetScalarType<T[P], AggregateSongCollection[P]>
  }




  export type SongCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongCollectionWhereInput
    orderBy?: SongCollectionOrderByWithAggregationInput | SongCollectionOrderByWithAggregationInput[]
    by: SongCollectionScalarFieldEnum[] | SongCollectionScalarFieldEnum
    having?: SongCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongCollectionCountAggregateInputType | true
    _avg?: SongCollectionAvgAggregateInputType
    _sum?: SongCollectionSumAggregateInputType
    _min?: SongCollectionMinAggregateInputType
    _max?: SongCollectionMaxAggregateInputType
  }

  export type SongCollectionGroupByOutputType = {
    id: number
    songId: number
    songlistId: string
    createdAt: Date
    _count: SongCollectionCountAggregateOutputType | null
    _avg: SongCollectionAvgAggregateOutputType | null
    _sum: SongCollectionSumAggregateOutputType | null
    _min: SongCollectionMinAggregateOutputType | null
    _max: SongCollectionMaxAggregateOutputType | null
  }

  type GetSongCollectionGroupByPayload<T extends SongCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], SongCollectionGroupByOutputType[P]>
        }
      >
    >


  export type SongCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    songlistId?: boolean
    createdAt?: boolean
    song?: boolean | SongItemDefaultArgs<ExtArgs>
    songlist?: boolean | SonglistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songCollection"]>

  export type SongCollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    songlistId?: boolean
    createdAt?: boolean
    song?: boolean | SongItemDefaultArgs<ExtArgs>
    songlist?: boolean | SonglistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songCollection"]>

  export type SongCollectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songId?: boolean
    songlistId?: boolean
    createdAt?: boolean
    song?: boolean | SongItemDefaultArgs<ExtArgs>
    songlist?: boolean | SonglistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songCollection"]>

  export type SongCollectionSelectScalar = {
    id?: boolean
    songId?: boolean
    songlistId?: boolean
    createdAt?: boolean
  }

  export type SongCollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songId" | "songlistId" | "createdAt", ExtArgs["result"]["songCollection"]>
  export type SongCollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongItemDefaultArgs<ExtArgs>
    songlist?: boolean | SonglistDefaultArgs<ExtArgs>
  }
  export type SongCollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongItemDefaultArgs<ExtArgs>
    songlist?: boolean | SonglistDefaultArgs<ExtArgs>
  }
  export type SongCollectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    song?: boolean | SongItemDefaultArgs<ExtArgs>
    songlist?: boolean | SonglistDefaultArgs<ExtArgs>
  }

  export type $SongCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongCollection"
    objects: {
      song: Prisma.$SongItemPayload<ExtArgs>
      songlist: Prisma.$SonglistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      songId: number
      songlistId: string
      createdAt: Date
    }, ExtArgs["result"]["songCollection"]>
    composites: {}
  }

  type SongCollectionGetPayload<S extends boolean | null | undefined | SongCollectionDefaultArgs> = $Result.GetResult<Prisma.$SongCollectionPayload, S>

  type SongCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongCollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongCollectionCountAggregateInputType | true
    }

  export interface SongCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongCollection'], meta: { name: 'SongCollection' } }
    /**
     * Find zero or one SongCollection that matches the filter.
     * @param {SongCollectionFindUniqueArgs} args - Arguments to find a SongCollection
     * @example
     * // Get one SongCollection
     * const songCollection = await prisma.songCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongCollectionFindUniqueArgs>(args: SelectSubset<T, SongCollectionFindUniqueArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SongCollection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongCollectionFindUniqueOrThrowArgs} args - Arguments to find a SongCollection
     * @example
     * // Get one SongCollection
     * const songCollection = await prisma.songCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongCollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SongCollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCollectionFindFirstArgs} args - Arguments to find a SongCollection
     * @example
     * // Get one SongCollection
     * const songCollection = await prisma.songCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongCollectionFindFirstArgs>(args?: SelectSubset<T, SongCollectionFindFirstArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCollectionFindFirstOrThrowArgs} args - Arguments to find a SongCollection
     * @example
     * // Get one SongCollection
     * const songCollection = await prisma.songCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongCollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SongCollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SongCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongCollections
     * const songCollections = await prisma.songCollection.findMany()
     * 
     * // Get first 10 SongCollections
     * const songCollections = await prisma.songCollection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songCollectionWithIdOnly = await prisma.songCollection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongCollectionFindManyArgs>(args?: SelectSubset<T, SongCollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SongCollection.
     * @param {SongCollectionCreateArgs} args - Arguments to create a SongCollection.
     * @example
     * // Create one SongCollection
     * const SongCollection = await prisma.songCollection.create({
     *   data: {
     *     // ... data to create a SongCollection
     *   }
     * })
     * 
     */
    create<T extends SongCollectionCreateArgs>(args: SelectSubset<T, SongCollectionCreateArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SongCollections.
     * @param {SongCollectionCreateManyArgs} args - Arguments to create many SongCollections.
     * @example
     * // Create many SongCollections
     * const songCollection = await prisma.songCollection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongCollectionCreateManyArgs>(args?: SelectSubset<T, SongCollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongCollections and returns the data saved in the database.
     * @param {SongCollectionCreateManyAndReturnArgs} args - Arguments to create many SongCollections.
     * @example
     * // Create many SongCollections
     * const songCollection = await prisma.songCollection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongCollections and only return the `id`
     * const songCollectionWithIdOnly = await prisma.songCollection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongCollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SongCollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SongCollection.
     * @param {SongCollectionDeleteArgs} args - Arguments to delete one SongCollection.
     * @example
     * // Delete one SongCollection
     * const SongCollection = await prisma.songCollection.delete({
     *   where: {
     *     // ... filter to delete one SongCollection
     *   }
     * })
     * 
     */
    delete<T extends SongCollectionDeleteArgs>(args: SelectSubset<T, SongCollectionDeleteArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SongCollection.
     * @param {SongCollectionUpdateArgs} args - Arguments to update one SongCollection.
     * @example
     * // Update one SongCollection
     * const songCollection = await prisma.songCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongCollectionUpdateArgs>(args: SelectSubset<T, SongCollectionUpdateArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SongCollections.
     * @param {SongCollectionDeleteManyArgs} args - Arguments to filter SongCollections to delete.
     * @example
     * // Delete a few SongCollections
     * const { count } = await prisma.songCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongCollectionDeleteManyArgs>(args?: SelectSubset<T, SongCollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongCollections
     * const songCollection = await prisma.songCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongCollectionUpdateManyArgs>(args: SelectSubset<T, SongCollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongCollections and returns the data updated in the database.
     * @param {SongCollectionUpdateManyAndReturnArgs} args - Arguments to update many SongCollections.
     * @example
     * // Update many SongCollections
     * const songCollection = await prisma.songCollection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SongCollections and only return the `id`
     * const songCollectionWithIdOnly = await prisma.songCollection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongCollectionUpdateManyAndReturnArgs>(args: SelectSubset<T, SongCollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SongCollection.
     * @param {SongCollectionUpsertArgs} args - Arguments to update or create a SongCollection.
     * @example
     * // Update or create a SongCollection
     * const songCollection = await prisma.songCollection.upsert({
     *   create: {
     *     // ... data to create a SongCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongCollection we want to update
     *   }
     * })
     */
    upsert<T extends SongCollectionUpsertArgs>(args: SelectSubset<T, SongCollectionUpsertArgs<ExtArgs>>): Prisma__SongCollectionClient<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SongCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCollectionCountArgs} args - Arguments to filter SongCollections to count.
     * @example
     * // Count the number of SongCollections
     * const count = await prisma.songCollection.count({
     *   where: {
     *     // ... the filter for the SongCollections we want to count
     *   }
     * })
    **/
    count<T extends SongCollectionCountArgs>(
      args?: Subset<T, SongCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongCollectionAggregateArgs>(args: Subset<T, SongCollectionAggregateArgs>): Prisma.PrismaPromise<GetSongCollectionAggregateType<T>>

    /**
     * Group by SongCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongCollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongCollectionGroupByArgs['orderBy'] }
        : { orderBy?: SongCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongCollection model
   */
  readonly fields: SongCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    song<T extends SongItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongItemDefaultArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    songlist<T extends SonglistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SonglistDefaultArgs<ExtArgs>>): Prisma__SonglistClient<$Result.GetResult<Prisma.$SonglistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SongCollection model
   */
  interface SongCollectionFieldRefs {
    readonly id: FieldRef<"SongCollection", 'Int'>
    readonly songId: FieldRef<"SongCollection", 'Int'>
    readonly songlistId: FieldRef<"SongCollection", 'String'>
    readonly createdAt: FieldRef<"SongCollection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SongCollection findUnique
   */
  export type SongCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * Filter, which SongCollection to fetch.
     */
    where: SongCollectionWhereUniqueInput
  }

  /**
   * SongCollection findUniqueOrThrow
   */
  export type SongCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * Filter, which SongCollection to fetch.
     */
    where: SongCollectionWhereUniqueInput
  }

  /**
   * SongCollection findFirst
   */
  export type SongCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * Filter, which SongCollection to fetch.
     */
    where?: SongCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongCollections to fetch.
     */
    orderBy?: SongCollectionOrderByWithRelationInput | SongCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongCollections.
     */
    cursor?: SongCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongCollections.
     */
    distinct?: SongCollectionScalarFieldEnum | SongCollectionScalarFieldEnum[]
  }

  /**
   * SongCollection findFirstOrThrow
   */
  export type SongCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * Filter, which SongCollection to fetch.
     */
    where?: SongCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongCollections to fetch.
     */
    orderBy?: SongCollectionOrderByWithRelationInput | SongCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongCollections.
     */
    cursor?: SongCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongCollections.
     */
    distinct?: SongCollectionScalarFieldEnum | SongCollectionScalarFieldEnum[]
  }

  /**
   * SongCollection findMany
   */
  export type SongCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * Filter, which SongCollections to fetch.
     */
    where?: SongCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongCollections to fetch.
     */
    orderBy?: SongCollectionOrderByWithRelationInput | SongCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongCollections.
     */
    cursor?: SongCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongCollections.
     */
    distinct?: SongCollectionScalarFieldEnum | SongCollectionScalarFieldEnum[]
  }

  /**
   * SongCollection create
   */
  export type SongCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a SongCollection.
     */
    data: XOR<SongCollectionCreateInput, SongCollectionUncheckedCreateInput>
  }

  /**
   * SongCollection createMany
   */
  export type SongCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongCollections.
     */
    data: SongCollectionCreateManyInput | SongCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongCollection createManyAndReturn
   */
  export type SongCollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * The data used to create many SongCollections.
     */
    data: SongCollectionCreateManyInput | SongCollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongCollection update
   */
  export type SongCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a SongCollection.
     */
    data: XOR<SongCollectionUpdateInput, SongCollectionUncheckedUpdateInput>
    /**
     * Choose, which SongCollection to update.
     */
    where: SongCollectionWhereUniqueInput
  }

  /**
   * SongCollection updateMany
   */
  export type SongCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongCollections.
     */
    data: XOR<SongCollectionUpdateManyMutationInput, SongCollectionUncheckedUpdateManyInput>
    /**
     * Filter which SongCollections to update
     */
    where?: SongCollectionWhereInput
    /**
     * Limit how many SongCollections to update.
     */
    limit?: number
  }

  /**
   * SongCollection updateManyAndReturn
   */
  export type SongCollectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * The data used to update SongCollections.
     */
    data: XOR<SongCollectionUpdateManyMutationInput, SongCollectionUncheckedUpdateManyInput>
    /**
     * Filter which SongCollections to update
     */
    where?: SongCollectionWhereInput
    /**
     * Limit how many SongCollections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongCollection upsert
   */
  export type SongCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the SongCollection to update in case it exists.
     */
    where: SongCollectionWhereUniqueInput
    /**
     * In case the SongCollection found by the `where` argument doesn't exist, create a new SongCollection with this data.
     */
    create: XOR<SongCollectionCreateInput, SongCollectionUncheckedCreateInput>
    /**
     * In case the SongCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongCollectionUpdateInput, SongCollectionUncheckedUpdateInput>
  }

  /**
   * SongCollection delete
   */
  export type SongCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    /**
     * Filter which SongCollection to delete.
     */
    where: SongCollectionWhereUniqueInput
  }

  /**
   * SongCollection deleteMany
   */
  export type SongCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongCollections to delete
     */
    where?: SongCollectionWhereInput
    /**
     * Limit how many SongCollections to delete.
     */
    limit?: number
  }

  /**
   * SongCollection without action
   */
  export type SongCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
  }


  /**
   * Model SongItem
   */

  export type AggregateSongItem = {
    _count: SongItemCountAggregateOutputType | null
    _avg: SongItemAvgAggregateOutputType | null
    _sum: SongItemSumAggregateOutputType | null
    _min: SongItemMinAggregateOutputType | null
    _max: SongItemMaxAggregateOutputType | null
  }

  export type SongItemAvgAggregateOutputType = {
    id: number | null
  }

  export type SongItemSumAggregateOutputType = {
    id: number | null
  }

  export type SongItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    releaseDate: Date | null
    runtime: string | null
    cover: string | null
  }

  export type SongItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    releaseDate: Date | null
    runtime: string | null
    cover: string | null
  }

  export type SongItemCountAggregateOutputType = {
    id: number
    title: number
    releaseDate: number
    runtime: number
    cover: number
    _all: number
  }


  export type SongItemAvgAggregateInputType = {
    id?: true
  }

  export type SongItemSumAggregateInputType = {
    id?: true
  }

  export type SongItemMinAggregateInputType = {
    id?: true
    title?: true
    releaseDate?: true
    runtime?: true
    cover?: true
  }

  export type SongItemMaxAggregateInputType = {
    id?: true
    title?: true
    releaseDate?: true
    runtime?: true
    cover?: true
  }

  export type SongItemCountAggregateInputType = {
    id?: true
    title?: true
    releaseDate?: true
    runtime?: true
    cover?: true
    _all?: true
  }

  export type SongItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongItem to aggregate.
     */
    where?: SongItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongItems to fetch.
     */
    orderBy?: SongItemOrderByWithRelationInput | SongItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongItems
    **/
    _count?: true | SongItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongItemMaxAggregateInputType
  }

  export type GetSongItemAggregateType<T extends SongItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSongItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongItem[P]>
      : GetScalarType<T[P], AggregateSongItem[P]>
  }




  export type SongItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongItemWhereInput
    orderBy?: SongItemOrderByWithAggregationInput | SongItemOrderByWithAggregationInput[]
    by: SongItemScalarFieldEnum[] | SongItemScalarFieldEnum
    having?: SongItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongItemCountAggregateInputType | true
    _avg?: SongItemAvgAggregateInputType
    _sum?: SongItemSumAggregateInputType
    _min?: SongItemMinAggregateInputType
    _max?: SongItemMaxAggregateInputType
  }

  export type SongItemGroupByOutputType = {
    id: number
    title: string
    releaseDate: Date | null
    runtime: string | null
    cover: string | null
    _count: SongItemCountAggregateOutputType | null
    _avg: SongItemAvgAggregateOutputType | null
    _sum: SongItemSumAggregateOutputType | null
    _min: SongItemMinAggregateOutputType | null
    _max: SongItemMaxAggregateOutputType | null
  }

  type GetSongItemGroupByPayload<T extends SongItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongItemGroupByOutputType[P]>
            : GetScalarType<T[P], SongItemGroupByOutputType[P]>
        }
      >
    >


  export type SongItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    releaseDate?: boolean
    runtime?: boolean
    cover?: boolean
    links?: boolean | SongItem$linksArgs<ExtArgs>
    artists?: boolean | SongItem$artistsArgs<ExtArgs>
    genres?: boolean | SongItem$genresArgs<ExtArgs>
    songs?: boolean | SongItem$songsArgs<ExtArgs>
    _count?: boolean | SongItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songItem"]>

  export type SongItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    releaseDate?: boolean
    runtime?: boolean
    cover?: boolean
  }, ExtArgs["result"]["songItem"]>

  export type SongItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    releaseDate?: boolean
    runtime?: boolean
    cover?: boolean
  }, ExtArgs["result"]["songItem"]>

  export type SongItemSelectScalar = {
    id?: boolean
    title?: boolean
    releaseDate?: boolean
    runtime?: boolean
    cover?: boolean
  }

  export type SongItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "releaseDate" | "runtime" | "cover", ExtArgs["result"]["songItem"]>
  export type SongItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | SongItem$linksArgs<ExtArgs>
    artists?: boolean | SongItem$artistsArgs<ExtArgs>
    genres?: boolean | SongItem$genresArgs<ExtArgs>
    songs?: boolean | SongItem$songsArgs<ExtArgs>
    _count?: boolean | SongItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SongItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SongItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SongItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongItem"
    objects: {
      links: Prisma.$LinkPayload<ExtArgs>[]
      artists: Prisma.$SongArtistPayload<ExtArgs>[]
      genres: Prisma.$SongGenrePayload<ExtArgs>[]
      songs: Prisma.$SongCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      releaseDate: Date | null
      runtime: string | null
      cover: string | null
    }, ExtArgs["result"]["songItem"]>
    composites: {}
  }

  type SongItemGetPayload<S extends boolean | null | undefined | SongItemDefaultArgs> = $Result.GetResult<Prisma.$SongItemPayload, S>

  type SongItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongItemCountAggregateInputType | true
    }

  export interface SongItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongItem'], meta: { name: 'SongItem' } }
    /**
     * Find zero or one SongItem that matches the filter.
     * @param {SongItemFindUniqueArgs} args - Arguments to find a SongItem
     * @example
     * // Get one SongItem
     * const songItem = await prisma.songItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongItemFindUniqueArgs>(args: SelectSubset<T, SongItemFindUniqueArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SongItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongItemFindUniqueOrThrowArgs} args - Arguments to find a SongItem
     * @example
     * // Get one SongItem
     * const songItem = await prisma.songItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SongItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongItemFindFirstArgs} args - Arguments to find a SongItem
     * @example
     * // Get one SongItem
     * const songItem = await prisma.songItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongItemFindFirstArgs>(args?: SelectSubset<T, SongItemFindFirstArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongItemFindFirstOrThrowArgs} args - Arguments to find a SongItem
     * @example
     * // Get one SongItem
     * const songItem = await prisma.songItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SongItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SongItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongItems
     * const songItems = await prisma.songItem.findMany()
     * 
     * // Get first 10 SongItems
     * const songItems = await prisma.songItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const songItemWithIdOnly = await prisma.songItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SongItemFindManyArgs>(args?: SelectSubset<T, SongItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SongItem.
     * @param {SongItemCreateArgs} args - Arguments to create a SongItem.
     * @example
     * // Create one SongItem
     * const SongItem = await prisma.songItem.create({
     *   data: {
     *     // ... data to create a SongItem
     *   }
     * })
     * 
     */
    create<T extends SongItemCreateArgs>(args: SelectSubset<T, SongItemCreateArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SongItems.
     * @param {SongItemCreateManyArgs} args - Arguments to create many SongItems.
     * @example
     * // Create many SongItems
     * const songItem = await prisma.songItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongItemCreateManyArgs>(args?: SelectSubset<T, SongItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongItems and returns the data saved in the database.
     * @param {SongItemCreateManyAndReturnArgs} args - Arguments to create many SongItems.
     * @example
     * // Create many SongItems
     * const songItem = await prisma.songItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongItems and only return the `id`
     * const songItemWithIdOnly = await prisma.songItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SongItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SongItem.
     * @param {SongItemDeleteArgs} args - Arguments to delete one SongItem.
     * @example
     * // Delete one SongItem
     * const SongItem = await prisma.songItem.delete({
     *   where: {
     *     // ... filter to delete one SongItem
     *   }
     * })
     * 
     */
    delete<T extends SongItemDeleteArgs>(args: SelectSubset<T, SongItemDeleteArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SongItem.
     * @param {SongItemUpdateArgs} args - Arguments to update one SongItem.
     * @example
     * // Update one SongItem
     * const songItem = await prisma.songItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongItemUpdateArgs>(args: SelectSubset<T, SongItemUpdateArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SongItems.
     * @param {SongItemDeleteManyArgs} args - Arguments to filter SongItems to delete.
     * @example
     * // Delete a few SongItems
     * const { count } = await prisma.songItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongItemDeleteManyArgs>(args?: SelectSubset<T, SongItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongItems
     * const songItem = await prisma.songItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongItemUpdateManyArgs>(args: SelectSubset<T, SongItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongItems and returns the data updated in the database.
     * @param {SongItemUpdateManyAndReturnArgs} args - Arguments to update many SongItems.
     * @example
     * // Update many SongItems
     * const songItem = await prisma.songItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SongItems and only return the `id`
     * const songItemWithIdOnly = await prisma.songItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SongItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SongItem.
     * @param {SongItemUpsertArgs} args - Arguments to update or create a SongItem.
     * @example
     * // Update or create a SongItem
     * const songItem = await prisma.songItem.upsert({
     *   create: {
     *     // ... data to create a SongItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongItem we want to update
     *   }
     * })
     */
    upsert<T extends SongItemUpsertArgs>(args: SelectSubset<T, SongItemUpsertArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SongItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongItemCountArgs} args - Arguments to filter SongItems to count.
     * @example
     * // Count the number of SongItems
     * const count = await prisma.songItem.count({
     *   where: {
     *     // ... the filter for the SongItems we want to count
     *   }
     * })
    **/
    count<T extends SongItemCountArgs>(
      args?: Subset<T, SongItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongItemAggregateArgs>(args: Subset<T, SongItemAggregateArgs>): Prisma.PrismaPromise<GetSongItemAggregateType<T>>

    /**
     * Group by SongItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongItemGroupByArgs['orderBy'] }
        : { orderBy?: SongItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongItem model
   */
  readonly fields: SongItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    links<T extends SongItem$linksArgs<ExtArgs> = {}>(args?: Subset<T, SongItem$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    artists<T extends SongItem$artistsArgs<ExtArgs> = {}>(args?: Subset<T, SongItem$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends SongItem$genresArgs<ExtArgs> = {}>(args?: Subset<T, SongItem$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    songs<T extends SongItem$songsArgs<ExtArgs> = {}>(args?: Subset<T, SongItem$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SongItem model
   */
  interface SongItemFieldRefs {
    readonly id: FieldRef<"SongItem", 'Int'>
    readonly title: FieldRef<"SongItem", 'String'>
    readonly releaseDate: FieldRef<"SongItem", 'DateTime'>
    readonly runtime: FieldRef<"SongItem", 'String'>
    readonly cover: FieldRef<"SongItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SongItem findUnique
   */
  export type SongItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * Filter, which SongItem to fetch.
     */
    where: SongItemWhereUniqueInput
  }

  /**
   * SongItem findUniqueOrThrow
   */
  export type SongItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * Filter, which SongItem to fetch.
     */
    where: SongItemWhereUniqueInput
  }

  /**
   * SongItem findFirst
   */
  export type SongItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * Filter, which SongItem to fetch.
     */
    where?: SongItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongItems to fetch.
     */
    orderBy?: SongItemOrderByWithRelationInput | SongItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongItems.
     */
    cursor?: SongItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongItems.
     */
    distinct?: SongItemScalarFieldEnum | SongItemScalarFieldEnum[]
  }

  /**
   * SongItem findFirstOrThrow
   */
  export type SongItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * Filter, which SongItem to fetch.
     */
    where?: SongItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongItems to fetch.
     */
    orderBy?: SongItemOrderByWithRelationInput | SongItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongItems.
     */
    cursor?: SongItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongItems.
     */
    distinct?: SongItemScalarFieldEnum | SongItemScalarFieldEnum[]
  }

  /**
   * SongItem findMany
   */
  export type SongItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * Filter, which SongItems to fetch.
     */
    where?: SongItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongItems to fetch.
     */
    orderBy?: SongItemOrderByWithRelationInput | SongItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongItems.
     */
    cursor?: SongItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongItems.
     */
    distinct?: SongItemScalarFieldEnum | SongItemScalarFieldEnum[]
  }

  /**
   * SongItem create
   */
  export type SongItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SongItem.
     */
    data: XOR<SongItemCreateInput, SongItemUncheckedCreateInput>
  }

  /**
   * SongItem createMany
   */
  export type SongItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongItems.
     */
    data: SongItemCreateManyInput | SongItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongItem createManyAndReturn
   */
  export type SongItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * The data used to create many SongItems.
     */
    data: SongItemCreateManyInput | SongItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongItem update
   */
  export type SongItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SongItem.
     */
    data: XOR<SongItemUpdateInput, SongItemUncheckedUpdateInput>
    /**
     * Choose, which SongItem to update.
     */
    where: SongItemWhereUniqueInput
  }

  /**
   * SongItem updateMany
   */
  export type SongItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongItems.
     */
    data: XOR<SongItemUpdateManyMutationInput, SongItemUncheckedUpdateManyInput>
    /**
     * Filter which SongItems to update
     */
    where?: SongItemWhereInput
    /**
     * Limit how many SongItems to update.
     */
    limit?: number
  }

  /**
   * SongItem updateManyAndReturn
   */
  export type SongItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * The data used to update SongItems.
     */
    data: XOR<SongItemUpdateManyMutationInput, SongItemUncheckedUpdateManyInput>
    /**
     * Filter which SongItems to update
     */
    where?: SongItemWhereInput
    /**
     * Limit how many SongItems to update.
     */
    limit?: number
  }

  /**
   * SongItem upsert
   */
  export type SongItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SongItem to update in case it exists.
     */
    where: SongItemWhereUniqueInput
    /**
     * In case the SongItem found by the `where` argument doesn't exist, create a new SongItem with this data.
     */
    create: XOR<SongItemCreateInput, SongItemUncheckedCreateInput>
    /**
     * In case the SongItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongItemUpdateInput, SongItemUncheckedUpdateInput>
  }

  /**
   * SongItem delete
   */
  export type SongItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
    /**
     * Filter which SongItem to delete.
     */
    where: SongItemWhereUniqueInput
  }

  /**
   * SongItem deleteMany
   */
  export type SongItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongItems to delete
     */
    where?: SongItemWhereInput
    /**
     * Limit how many SongItems to delete.
     */
    limit?: number
  }

  /**
   * SongItem.links
   */
  export type SongItem$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * SongItem.artists
   */
  export type SongItem$artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    where?: SongArtistWhereInput
    orderBy?: SongArtistOrderByWithRelationInput | SongArtistOrderByWithRelationInput[]
    cursor?: SongArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongArtistScalarFieldEnum | SongArtistScalarFieldEnum[]
  }

  /**
   * SongItem.genres
   */
  export type SongItem$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    where?: SongGenreWhereInput
    orderBy?: SongGenreOrderByWithRelationInput | SongGenreOrderByWithRelationInput[]
    cursor?: SongGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongGenreScalarFieldEnum | SongGenreScalarFieldEnum[]
  }

  /**
   * SongItem.songs
   */
  export type SongItem$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongCollection
     */
    select?: SongCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongCollection
     */
    omit?: SongCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongCollectionInclude<ExtArgs> | null
    where?: SongCollectionWhereInput
    orderBy?: SongCollectionOrderByWithRelationInput | SongCollectionOrderByWithRelationInput[]
    cursor?: SongCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongCollectionScalarFieldEnum | SongCollectionScalarFieldEnum[]
  }

  /**
   * SongItem without action
   */
  export type SongItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongItem
     */
    select?: SongItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongItem
     */
    omit?: SongItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongItemInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    id: number | null
    songItemId: number | null
  }

  export type LinkSumAggregateOutputType = {
    id: number | null
    songItemId: number | null
  }

  export type LinkMinAggregateOutputType = {
    id: number | null
    songItemId: number | null
    platform: string | null
    url: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: number | null
    songItemId: number | null
    platform: string | null
    url: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    songItemId: number
    platform: number
    url: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    id?: true
    songItemId?: true
  }

  export type LinkSumAggregateInputType = {
    id?: true
    songItemId?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    songItemId?: true
    platform?: true
    url?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    songItemId?: true
    platform?: true
    url?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    songItemId?: true
    platform?: true
    url?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: number
    songItemId: number
    platform: string
    url: string
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songItemId?: boolean
    platform?: boolean
    url?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songItemId?: boolean
    platform?: boolean
    url?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    songItemId?: boolean
    platform?: boolean
    url?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    songItemId?: boolean
    platform?: boolean
    url?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "songItemId" | "platform" | "url", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      songItem: Prisma.$SongItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      songItemId: number
      platform: string
      url: string
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songItem<T extends SongItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongItemDefaultArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'Int'>
    readonly songItemId: FieldRef<"Link", 'Int'>
    readonly platform: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model SongArtist
   */

  export type AggregateSongArtist = {
    _count: SongArtistCountAggregateOutputType | null
    _avg: SongArtistAvgAggregateOutputType | null
    _sum: SongArtistSumAggregateOutputType | null
    _min: SongArtistMinAggregateOutputType | null
    _max: SongArtistMaxAggregateOutputType | null
  }

  export type SongArtistAvgAggregateOutputType = {
    songItemId: number | null
    artistId: number | null
  }

  export type SongArtistSumAggregateOutputType = {
    songItemId: number | null
    artistId: number | null
  }

  export type SongArtistMinAggregateOutputType = {
    songItemId: number | null
    artistId: number | null
  }

  export type SongArtistMaxAggregateOutputType = {
    songItemId: number | null
    artistId: number | null
  }

  export type SongArtistCountAggregateOutputType = {
    songItemId: number
    artistId: number
    _all: number
  }


  export type SongArtistAvgAggregateInputType = {
    songItemId?: true
    artistId?: true
  }

  export type SongArtistSumAggregateInputType = {
    songItemId?: true
    artistId?: true
  }

  export type SongArtistMinAggregateInputType = {
    songItemId?: true
    artistId?: true
  }

  export type SongArtistMaxAggregateInputType = {
    songItemId?: true
    artistId?: true
  }

  export type SongArtistCountAggregateInputType = {
    songItemId?: true
    artistId?: true
    _all?: true
  }

  export type SongArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongArtist to aggregate.
     */
    where?: SongArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongArtists to fetch.
     */
    orderBy?: SongArtistOrderByWithRelationInput | SongArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongArtists
    **/
    _count?: true | SongArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongArtistMaxAggregateInputType
  }

  export type GetSongArtistAggregateType<T extends SongArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateSongArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongArtist[P]>
      : GetScalarType<T[P], AggregateSongArtist[P]>
  }




  export type SongArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongArtistWhereInput
    orderBy?: SongArtistOrderByWithAggregationInput | SongArtistOrderByWithAggregationInput[]
    by: SongArtistScalarFieldEnum[] | SongArtistScalarFieldEnum
    having?: SongArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongArtistCountAggregateInputType | true
    _avg?: SongArtistAvgAggregateInputType
    _sum?: SongArtistSumAggregateInputType
    _min?: SongArtistMinAggregateInputType
    _max?: SongArtistMaxAggregateInputType
  }

  export type SongArtistGroupByOutputType = {
    songItemId: number
    artistId: number
    _count: SongArtistCountAggregateOutputType | null
    _avg: SongArtistAvgAggregateOutputType | null
    _sum: SongArtistSumAggregateOutputType | null
    _min: SongArtistMinAggregateOutputType | null
    _max: SongArtistMaxAggregateOutputType | null
  }

  type GetSongArtistGroupByPayload<T extends SongArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongArtistGroupByOutputType[P]>
            : GetScalarType<T[P], SongArtistGroupByOutputType[P]>
        }
      >
    >


  export type SongArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    songItemId?: boolean
    artistId?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songArtist"]>

  export type SongArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    songItemId?: boolean
    artistId?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songArtist"]>

  export type SongArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    songItemId?: boolean
    artistId?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songArtist"]>

  export type SongArtistSelectScalar = {
    songItemId?: boolean
    artistId?: boolean
  }

  export type SongArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"songItemId" | "artistId", ExtArgs["result"]["songArtist"]>
  export type SongArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type SongArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }
  export type SongArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }

  export type $SongArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongArtist"
    objects: {
      songItem: Prisma.$SongItemPayload<ExtArgs>
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      songItemId: number
      artistId: number
    }, ExtArgs["result"]["songArtist"]>
    composites: {}
  }

  type SongArtistGetPayload<S extends boolean | null | undefined | SongArtistDefaultArgs> = $Result.GetResult<Prisma.$SongArtistPayload, S>

  type SongArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongArtistCountAggregateInputType | true
    }

  export interface SongArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongArtist'], meta: { name: 'SongArtist' } }
    /**
     * Find zero or one SongArtist that matches the filter.
     * @param {SongArtistFindUniqueArgs} args - Arguments to find a SongArtist
     * @example
     * // Get one SongArtist
     * const songArtist = await prisma.songArtist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongArtistFindUniqueArgs>(args: SelectSubset<T, SongArtistFindUniqueArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SongArtist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongArtistFindUniqueOrThrowArgs} args - Arguments to find a SongArtist
     * @example
     * // Get one SongArtist
     * const songArtist = await prisma.songArtist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, SongArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongArtist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongArtistFindFirstArgs} args - Arguments to find a SongArtist
     * @example
     * // Get one SongArtist
     * const songArtist = await prisma.songArtist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongArtistFindFirstArgs>(args?: SelectSubset<T, SongArtistFindFirstArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongArtist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongArtistFindFirstOrThrowArgs} args - Arguments to find a SongArtist
     * @example
     * // Get one SongArtist
     * const songArtist = await prisma.songArtist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, SongArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SongArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongArtists
     * const songArtists = await prisma.songArtist.findMany()
     * 
     * // Get first 10 SongArtists
     * const songArtists = await prisma.songArtist.findMany({ take: 10 })
     * 
     * // Only select the `songItemId`
     * const songArtistWithSongItemIdOnly = await prisma.songArtist.findMany({ select: { songItemId: true } })
     * 
     */
    findMany<T extends SongArtistFindManyArgs>(args?: SelectSubset<T, SongArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SongArtist.
     * @param {SongArtistCreateArgs} args - Arguments to create a SongArtist.
     * @example
     * // Create one SongArtist
     * const SongArtist = await prisma.songArtist.create({
     *   data: {
     *     // ... data to create a SongArtist
     *   }
     * })
     * 
     */
    create<T extends SongArtistCreateArgs>(args: SelectSubset<T, SongArtistCreateArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SongArtists.
     * @param {SongArtistCreateManyArgs} args - Arguments to create many SongArtists.
     * @example
     * // Create many SongArtists
     * const songArtist = await prisma.songArtist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongArtistCreateManyArgs>(args?: SelectSubset<T, SongArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongArtists and returns the data saved in the database.
     * @param {SongArtistCreateManyAndReturnArgs} args - Arguments to create many SongArtists.
     * @example
     * // Create many SongArtists
     * const songArtist = await prisma.songArtist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongArtists and only return the `songItemId`
     * const songArtistWithSongItemIdOnly = await prisma.songArtist.createManyAndReturn({
     *   select: { songItemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, SongArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SongArtist.
     * @param {SongArtistDeleteArgs} args - Arguments to delete one SongArtist.
     * @example
     * // Delete one SongArtist
     * const SongArtist = await prisma.songArtist.delete({
     *   where: {
     *     // ... filter to delete one SongArtist
     *   }
     * })
     * 
     */
    delete<T extends SongArtistDeleteArgs>(args: SelectSubset<T, SongArtistDeleteArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SongArtist.
     * @param {SongArtistUpdateArgs} args - Arguments to update one SongArtist.
     * @example
     * // Update one SongArtist
     * const songArtist = await prisma.songArtist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongArtistUpdateArgs>(args: SelectSubset<T, SongArtistUpdateArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SongArtists.
     * @param {SongArtistDeleteManyArgs} args - Arguments to filter SongArtists to delete.
     * @example
     * // Delete a few SongArtists
     * const { count } = await prisma.songArtist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongArtistDeleteManyArgs>(args?: SelectSubset<T, SongArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongArtists
     * const songArtist = await prisma.songArtist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongArtistUpdateManyArgs>(args: SelectSubset<T, SongArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongArtists and returns the data updated in the database.
     * @param {SongArtistUpdateManyAndReturnArgs} args - Arguments to update many SongArtists.
     * @example
     * // Update many SongArtists
     * const songArtist = await prisma.songArtist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SongArtists and only return the `songItemId`
     * const songArtistWithSongItemIdOnly = await prisma.songArtist.updateManyAndReturn({
     *   select: { songItemId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, SongArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SongArtist.
     * @param {SongArtistUpsertArgs} args - Arguments to update or create a SongArtist.
     * @example
     * // Update or create a SongArtist
     * const songArtist = await prisma.songArtist.upsert({
     *   create: {
     *     // ... data to create a SongArtist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongArtist we want to update
     *   }
     * })
     */
    upsert<T extends SongArtistUpsertArgs>(args: SelectSubset<T, SongArtistUpsertArgs<ExtArgs>>): Prisma__SongArtistClient<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SongArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongArtistCountArgs} args - Arguments to filter SongArtists to count.
     * @example
     * // Count the number of SongArtists
     * const count = await prisma.songArtist.count({
     *   where: {
     *     // ... the filter for the SongArtists we want to count
     *   }
     * })
    **/
    count<T extends SongArtistCountArgs>(
      args?: Subset<T, SongArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongArtistAggregateArgs>(args: Subset<T, SongArtistAggregateArgs>): Prisma.PrismaPromise<GetSongArtistAggregateType<T>>

    /**
     * Group by SongArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongArtistGroupByArgs['orderBy'] }
        : { orderBy?: SongArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongArtist model
   */
  readonly fields: SongArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongArtist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songItem<T extends SongItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongItemDefaultArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SongArtist model
   */
  interface SongArtistFieldRefs {
    readonly songItemId: FieldRef<"SongArtist", 'Int'>
    readonly artistId: FieldRef<"SongArtist", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SongArtist findUnique
   */
  export type SongArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * Filter, which SongArtist to fetch.
     */
    where: SongArtistWhereUniqueInput
  }

  /**
   * SongArtist findUniqueOrThrow
   */
  export type SongArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * Filter, which SongArtist to fetch.
     */
    where: SongArtistWhereUniqueInput
  }

  /**
   * SongArtist findFirst
   */
  export type SongArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * Filter, which SongArtist to fetch.
     */
    where?: SongArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongArtists to fetch.
     */
    orderBy?: SongArtistOrderByWithRelationInput | SongArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongArtists.
     */
    cursor?: SongArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongArtists.
     */
    distinct?: SongArtistScalarFieldEnum | SongArtistScalarFieldEnum[]
  }

  /**
   * SongArtist findFirstOrThrow
   */
  export type SongArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * Filter, which SongArtist to fetch.
     */
    where?: SongArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongArtists to fetch.
     */
    orderBy?: SongArtistOrderByWithRelationInput | SongArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongArtists.
     */
    cursor?: SongArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongArtists.
     */
    distinct?: SongArtistScalarFieldEnum | SongArtistScalarFieldEnum[]
  }

  /**
   * SongArtist findMany
   */
  export type SongArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * Filter, which SongArtists to fetch.
     */
    where?: SongArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongArtists to fetch.
     */
    orderBy?: SongArtistOrderByWithRelationInput | SongArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongArtists.
     */
    cursor?: SongArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongArtists.
     */
    distinct?: SongArtistScalarFieldEnum | SongArtistScalarFieldEnum[]
  }

  /**
   * SongArtist create
   */
  export type SongArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a SongArtist.
     */
    data: XOR<SongArtistCreateInput, SongArtistUncheckedCreateInput>
  }

  /**
   * SongArtist createMany
   */
  export type SongArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongArtists.
     */
    data: SongArtistCreateManyInput | SongArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongArtist createManyAndReturn
   */
  export type SongArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * The data used to create many SongArtists.
     */
    data: SongArtistCreateManyInput | SongArtistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongArtist update
   */
  export type SongArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a SongArtist.
     */
    data: XOR<SongArtistUpdateInput, SongArtistUncheckedUpdateInput>
    /**
     * Choose, which SongArtist to update.
     */
    where: SongArtistWhereUniqueInput
  }

  /**
   * SongArtist updateMany
   */
  export type SongArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongArtists.
     */
    data: XOR<SongArtistUpdateManyMutationInput, SongArtistUncheckedUpdateManyInput>
    /**
     * Filter which SongArtists to update
     */
    where?: SongArtistWhereInput
    /**
     * Limit how many SongArtists to update.
     */
    limit?: number
  }

  /**
   * SongArtist updateManyAndReturn
   */
  export type SongArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * The data used to update SongArtists.
     */
    data: XOR<SongArtistUpdateManyMutationInput, SongArtistUncheckedUpdateManyInput>
    /**
     * Filter which SongArtists to update
     */
    where?: SongArtistWhereInput
    /**
     * Limit how many SongArtists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongArtist upsert
   */
  export type SongArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the SongArtist to update in case it exists.
     */
    where: SongArtistWhereUniqueInput
    /**
     * In case the SongArtist found by the `where` argument doesn't exist, create a new SongArtist with this data.
     */
    create: XOR<SongArtistCreateInput, SongArtistUncheckedCreateInput>
    /**
     * In case the SongArtist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongArtistUpdateInput, SongArtistUncheckedUpdateInput>
  }

  /**
   * SongArtist delete
   */
  export type SongArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    /**
     * Filter which SongArtist to delete.
     */
    where: SongArtistWhereUniqueInput
  }

  /**
   * SongArtist deleteMany
   */
  export type SongArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongArtists to delete
     */
    where?: SongArtistWhereInput
    /**
     * Limit how many SongArtists to delete.
     */
    limit?: number
  }

  /**
   * SongArtist without action
   */
  export type SongArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    name: string
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    songs?: boolean | Artist$songsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Artist$songsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      songs: Prisma.$SongArtistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Artist$songsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'Int'>
    readonly name: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.songs
   */
  export type Artist$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongArtist
     */
    select?: SongArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongArtist
     */
    omit?: SongArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongArtistInclude<ExtArgs> | null
    where?: SongArtistWhereInput
    orderBy?: SongArtistOrderByWithRelationInput | SongArtistOrderByWithRelationInput[]
    cursor?: SongArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongArtistScalarFieldEnum | SongArtistScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    songs?: boolean | Genre$songsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songs?: boolean | Genre$songsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      songs: Prisma.$SongGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songs<T extends Genre$songsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$songsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.songs
   */
  export type Genre$songsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    where?: SongGenreWhereInput
    orderBy?: SongGenreOrderByWithRelationInput | SongGenreOrderByWithRelationInput[]
    cursor?: SongGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SongGenreScalarFieldEnum | SongGenreScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model SongGenre
   */

  export type AggregateSongGenre = {
    _count: SongGenreCountAggregateOutputType | null
    _avg: SongGenreAvgAggregateOutputType | null
    _sum: SongGenreSumAggregateOutputType | null
    _min: SongGenreMinAggregateOutputType | null
    _max: SongGenreMaxAggregateOutputType | null
  }

  export type SongGenreAvgAggregateOutputType = {
    songItemId: number | null
    genreId: number | null
  }

  export type SongGenreSumAggregateOutputType = {
    songItemId: number | null
    genreId: number | null
  }

  export type SongGenreMinAggregateOutputType = {
    songItemId: number | null
    genreId: number | null
  }

  export type SongGenreMaxAggregateOutputType = {
    songItemId: number | null
    genreId: number | null
  }

  export type SongGenreCountAggregateOutputType = {
    songItemId: number
    genreId: number
    _all: number
  }


  export type SongGenreAvgAggregateInputType = {
    songItemId?: true
    genreId?: true
  }

  export type SongGenreSumAggregateInputType = {
    songItemId?: true
    genreId?: true
  }

  export type SongGenreMinAggregateInputType = {
    songItemId?: true
    genreId?: true
  }

  export type SongGenreMaxAggregateInputType = {
    songItemId?: true
    genreId?: true
  }

  export type SongGenreCountAggregateInputType = {
    songItemId?: true
    genreId?: true
    _all?: true
  }

  export type SongGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongGenre to aggregate.
     */
    where?: SongGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongGenres to fetch.
     */
    orderBy?: SongGenreOrderByWithRelationInput | SongGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SongGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SongGenres
    **/
    _count?: true | SongGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SongGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SongGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SongGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SongGenreMaxAggregateInputType
  }

  export type GetSongGenreAggregateType<T extends SongGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateSongGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSongGenre[P]>
      : GetScalarType<T[P], AggregateSongGenre[P]>
  }




  export type SongGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SongGenreWhereInput
    orderBy?: SongGenreOrderByWithAggregationInput | SongGenreOrderByWithAggregationInput[]
    by: SongGenreScalarFieldEnum[] | SongGenreScalarFieldEnum
    having?: SongGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SongGenreCountAggregateInputType | true
    _avg?: SongGenreAvgAggregateInputType
    _sum?: SongGenreSumAggregateInputType
    _min?: SongGenreMinAggregateInputType
    _max?: SongGenreMaxAggregateInputType
  }

  export type SongGenreGroupByOutputType = {
    songItemId: number
    genreId: number
    _count: SongGenreCountAggregateOutputType | null
    _avg: SongGenreAvgAggregateOutputType | null
    _sum: SongGenreSumAggregateOutputType | null
    _min: SongGenreMinAggregateOutputType | null
    _max: SongGenreMaxAggregateOutputType | null
  }

  type GetSongGenreGroupByPayload<T extends SongGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SongGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SongGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SongGenreGroupByOutputType[P]>
            : GetScalarType<T[P], SongGenreGroupByOutputType[P]>
        }
      >
    >


  export type SongGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    songItemId?: boolean
    genreId?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songGenre"]>

  export type SongGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    songItemId?: boolean
    genreId?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songGenre"]>

  export type SongGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    songItemId?: boolean
    genreId?: boolean
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["songGenre"]>

  export type SongGenreSelectScalar = {
    songItemId?: boolean
    genreId?: boolean
  }

  export type SongGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"songItemId" | "genreId", ExtArgs["result"]["songGenre"]>
  export type SongGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type SongGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type SongGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    songItem?: boolean | SongItemDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }

  export type $SongGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SongGenre"
    objects: {
      songItem: Prisma.$SongItemPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      songItemId: number
      genreId: number
    }, ExtArgs["result"]["songGenre"]>
    composites: {}
  }

  type SongGenreGetPayload<S extends boolean | null | undefined | SongGenreDefaultArgs> = $Result.GetResult<Prisma.$SongGenrePayload, S>

  type SongGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SongGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SongGenreCountAggregateInputType | true
    }

  export interface SongGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SongGenre'], meta: { name: 'SongGenre' } }
    /**
     * Find zero or one SongGenre that matches the filter.
     * @param {SongGenreFindUniqueArgs} args - Arguments to find a SongGenre
     * @example
     * // Get one SongGenre
     * const songGenre = await prisma.songGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SongGenreFindUniqueArgs>(args: SelectSubset<T, SongGenreFindUniqueArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SongGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SongGenreFindUniqueOrThrowArgs} args - Arguments to find a SongGenre
     * @example
     * // Get one SongGenre
     * const songGenre = await prisma.songGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SongGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, SongGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGenreFindFirstArgs} args - Arguments to find a SongGenre
     * @example
     * // Get one SongGenre
     * const songGenre = await prisma.songGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SongGenreFindFirstArgs>(args?: SelectSubset<T, SongGenreFindFirstArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SongGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGenreFindFirstOrThrowArgs} args - Arguments to find a SongGenre
     * @example
     * // Get one SongGenre
     * const songGenre = await prisma.songGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SongGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, SongGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SongGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SongGenres
     * const songGenres = await prisma.songGenre.findMany()
     * 
     * // Get first 10 SongGenres
     * const songGenres = await prisma.songGenre.findMany({ take: 10 })
     * 
     * // Only select the `songItemId`
     * const songGenreWithSongItemIdOnly = await prisma.songGenre.findMany({ select: { songItemId: true } })
     * 
     */
    findMany<T extends SongGenreFindManyArgs>(args?: SelectSubset<T, SongGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SongGenre.
     * @param {SongGenreCreateArgs} args - Arguments to create a SongGenre.
     * @example
     * // Create one SongGenre
     * const SongGenre = await prisma.songGenre.create({
     *   data: {
     *     // ... data to create a SongGenre
     *   }
     * })
     * 
     */
    create<T extends SongGenreCreateArgs>(args: SelectSubset<T, SongGenreCreateArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SongGenres.
     * @param {SongGenreCreateManyArgs} args - Arguments to create many SongGenres.
     * @example
     * // Create many SongGenres
     * const songGenre = await prisma.songGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SongGenreCreateManyArgs>(args?: SelectSubset<T, SongGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SongGenres and returns the data saved in the database.
     * @param {SongGenreCreateManyAndReturnArgs} args - Arguments to create many SongGenres.
     * @example
     * // Create many SongGenres
     * const songGenre = await prisma.songGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SongGenres and only return the `songItemId`
     * const songGenreWithSongItemIdOnly = await prisma.songGenre.createManyAndReturn({
     *   select: { songItemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SongGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, SongGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SongGenre.
     * @param {SongGenreDeleteArgs} args - Arguments to delete one SongGenre.
     * @example
     * // Delete one SongGenre
     * const SongGenre = await prisma.songGenre.delete({
     *   where: {
     *     // ... filter to delete one SongGenre
     *   }
     * })
     * 
     */
    delete<T extends SongGenreDeleteArgs>(args: SelectSubset<T, SongGenreDeleteArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SongGenre.
     * @param {SongGenreUpdateArgs} args - Arguments to update one SongGenre.
     * @example
     * // Update one SongGenre
     * const songGenre = await prisma.songGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SongGenreUpdateArgs>(args: SelectSubset<T, SongGenreUpdateArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SongGenres.
     * @param {SongGenreDeleteManyArgs} args - Arguments to filter SongGenres to delete.
     * @example
     * // Delete a few SongGenres
     * const { count } = await prisma.songGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SongGenreDeleteManyArgs>(args?: SelectSubset<T, SongGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SongGenres
     * const songGenre = await prisma.songGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SongGenreUpdateManyArgs>(args: SelectSubset<T, SongGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SongGenres and returns the data updated in the database.
     * @param {SongGenreUpdateManyAndReturnArgs} args - Arguments to update many SongGenres.
     * @example
     * // Update many SongGenres
     * const songGenre = await prisma.songGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SongGenres and only return the `songItemId`
     * const songGenreWithSongItemIdOnly = await prisma.songGenre.updateManyAndReturn({
     *   select: { songItemId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SongGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, SongGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SongGenre.
     * @param {SongGenreUpsertArgs} args - Arguments to update or create a SongGenre.
     * @example
     * // Update or create a SongGenre
     * const songGenre = await prisma.songGenre.upsert({
     *   create: {
     *     // ... data to create a SongGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SongGenre we want to update
     *   }
     * })
     */
    upsert<T extends SongGenreUpsertArgs>(args: SelectSubset<T, SongGenreUpsertArgs<ExtArgs>>): Prisma__SongGenreClient<$Result.GetResult<Prisma.$SongGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SongGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGenreCountArgs} args - Arguments to filter SongGenres to count.
     * @example
     * // Count the number of SongGenres
     * const count = await prisma.songGenre.count({
     *   where: {
     *     // ... the filter for the SongGenres we want to count
     *   }
     * })
    **/
    count<T extends SongGenreCountArgs>(
      args?: Subset<T, SongGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SongGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SongGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SongGenreAggregateArgs>(args: Subset<T, SongGenreAggregateArgs>): Prisma.PrismaPromise<GetSongGenreAggregateType<T>>

    /**
     * Group by SongGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SongGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SongGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SongGenreGroupByArgs['orderBy'] }
        : { orderBy?: SongGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SongGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SongGenre model
   */
  readonly fields: SongGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SongGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SongGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    songItem<T extends SongItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SongItemDefaultArgs<ExtArgs>>): Prisma__SongItemClient<$Result.GetResult<Prisma.$SongItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SongGenre model
   */
  interface SongGenreFieldRefs {
    readonly songItemId: FieldRef<"SongGenre", 'Int'>
    readonly genreId: FieldRef<"SongGenre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SongGenre findUnique
   */
  export type SongGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * Filter, which SongGenre to fetch.
     */
    where: SongGenreWhereUniqueInput
  }

  /**
   * SongGenre findUniqueOrThrow
   */
  export type SongGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * Filter, which SongGenre to fetch.
     */
    where: SongGenreWhereUniqueInput
  }

  /**
   * SongGenre findFirst
   */
  export type SongGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * Filter, which SongGenre to fetch.
     */
    where?: SongGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongGenres to fetch.
     */
    orderBy?: SongGenreOrderByWithRelationInput | SongGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongGenres.
     */
    cursor?: SongGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongGenres.
     */
    distinct?: SongGenreScalarFieldEnum | SongGenreScalarFieldEnum[]
  }

  /**
   * SongGenre findFirstOrThrow
   */
  export type SongGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * Filter, which SongGenre to fetch.
     */
    where?: SongGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongGenres to fetch.
     */
    orderBy?: SongGenreOrderByWithRelationInput | SongGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SongGenres.
     */
    cursor?: SongGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongGenres.
     */
    distinct?: SongGenreScalarFieldEnum | SongGenreScalarFieldEnum[]
  }

  /**
   * SongGenre findMany
   */
  export type SongGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * Filter, which SongGenres to fetch.
     */
    where?: SongGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SongGenres to fetch.
     */
    orderBy?: SongGenreOrderByWithRelationInput | SongGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SongGenres.
     */
    cursor?: SongGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SongGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SongGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SongGenres.
     */
    distinct?: SongGenreScalarFieldEnum | SongGenreScalarFieldEnum[]
  }

  /**
   * SongGenre create
   */
  export type SongGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a SongGenre.
     */
    data: XOR<SongGenreCreateInput, SongGenreUncheckedCreateInput>
  }

  /**
   * SongGenre createMany
   */
  export type SongGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SongGenres.
     */
    data: SongGenreCreateManyInput | SongGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SongGenre createManyAndReturn
   */
  export type SongGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * The data used to create many SongGenres.
     */
    data: SongGenreCreateManyInput | SongGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongGenre update
   */
  export type SongGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a SongGenre.
     */
    data: XOR<SongGenreUpdateInput, SongGenreUncheckedUpdateInput>
    /**
     * Choose, which SongGenre to update.
     */
    where: SongGenreWhereUniqueInput
  }

  /**
   * SongGenre updateMany
   */
  export type SongGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SongGenres.
     */
    data: XOR<SongGenreUpdateManyMutationInput, SongGenreUncheckedUpdateManyInput>
    /**
     * Filter which SongGenres to update
     */
    where?: SongGenreWhereInput
    /**
     * Limit how many SongGenres to update.
     */
    limit?: number
  }

  /**
   * SongGenre updateManyAndReturn
   */
  export type SongGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * The data used to update SongGenres.
     */
    data: XOR<SongGenreUpdateManyMutationInput, SongGenreUncheckedUpdateManyInput>
    /**
     * Filter which SongGenres to update
     */
    where?: SongGenreWhereInput
    /**
     * Limit how many SongGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SongGenre upsert
   */
  export type SongGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the SongGenre to update in case it exists.
     */
    where: SongGenreWhereUniqueInput
    /**
     * In case the SongGenre found by the `where` argument doesn't exist, create a new SongGenre with this data.
     */
    create: XOR<SongGenreCreateInput, SongGenreUncheckedCreateInput>
    /**
     * In case the SongGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SongGenreUpdateInput, SongGenreUncheckedUpdateInput>
  }

  /**
   * SongGenre delete
   */
  export type SongGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
    /**
     * Filter which SongGenre to delete.
     */
    where: SongGenreWhereUniqueInput
  }

  /**
   * SongGenre deleteMany
   */
  export type SongGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SongGenres to delete
     */
    where?: SongGenreWhereInput
    /**
     * Limit how many SongGenres to delete.
     */
    limit?: number
  }

  /**
   * SongGenre without action
   */
  export type SongGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SongGenre
     */
    select?: SongGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SongGenre
     */
    omit?: SongGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SongGenreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SonglistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    visibility: 'visibility',
    description: 'description',
    cover: 'cover',
    userId: 'userId'
  };

  export type SonglistScalarFieldEnum = (typeof SonglistScalarFieldEnum)[keyof typeof SonglistScalarFieldEnum]


  export const SongCollectionScalarFieldEnum: {
    id: 'id',
    songId: 'songId',
    songlistId: 'songlistId',
    createdAt: 'createdAt'
  };

  export type SongCollectionScalarFieldEnum = (typeof SongCollectionScalarFieldEnum)[keyof typeof SongCollectionScalarFieldEnum]


  export const SongItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    releaseDate: 'releaseDate',
    runtime: 'runtime',
    cover: 'cover'
  };

  export type SongItemScalarFieldEnum = (typeof SongItemScalarFieldEnum)[keyof typeof SongItemScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    songItemId: 'songItemId',
    platform: 'platform',
    url: 'url'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const SongArtistScalarFieldEnum: {
    songItemId: 'songItemId',
    artistId: 'artistId'
  };

  export type SongArtistScalarFieldEnum = (typeof SongArtistScalarFieldEnum)[keyof typeof SongArtistScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const SongGenreScalarFieldEnum: {
    songItemId: 'songItemId',
    genreId: 'genreId'
  };

  export type SongGenreScalarFieldEnum = (typeof SongGenreScalarFieldEnum)[keyof typeof SongGenreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    songlists?: SonglistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    songlists?: SonglistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    songlists?: SonglistListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
  }

  export type SonglistWhereInput = {
    AND?: SonglistWhereInput | SonglistWhereInput[]
    OR?: SonglistWhereInput[]
    NOT?: SonglistWhereInput | SonglistWhereInput[]
    id?: StringFilter<"Songlist"> | string
    name?: StringFilter<"Songlist"> | string
    visibility?: StringFilter<"Songlist"> | string
    description?: StringNullableFilter<"Songlist"> | string | null
    cover?: StringNullableFilter<"Songlist"> | string | null
    userId?: StringFilter<"Songlist"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    songs?: SongCollectionListRelationFilter
  }

  export type SonglistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    description?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    songs?: SongCollectionOrderByRelationAggregateInput
  }

  export type SonglistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SonglistWhereInput | SonglistWhereInput[]
    OR?: SonglistWhereInput[]
    NOT?: SonglistWhereInput | SonglistWhereInput[]
    name?: StringFilter<"Songlist"> | string
    visibility?: StringFilter<"Songlist"> | string
    description?: StringNullableFilter<"Songlist"> | string | null
    cover?: StringNullableFilter<"Songlist"> | string | null
    userId?: StringFilter<"Songlist"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    songs?: SongCollectionListRelationFilter
  }, "id">

  export type SonglistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    description?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SonglistCountOrderByAggregateInput
    _max?: SonglistMaxOrderByAggregateInput
    _min?: SonglistMinOrderByAggregateInput
  }

  export type SonglistScalarWhereWithAggregatesInput = {
    AND?: SonglistScalarWhereWithAggregatesInput | SonglistScalarWhereWithAggregatesInput[]
    OR?: SonglistScalarWhereWithAggregatesInput[]
    NOT?: SonglistScalarWhereWithAggregatesInput | SonglistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Songlist"> | string
    name?: StringWithAggregatesFilter<"Songlist"> | string
    visibility?: StringWithAggregatesFilter<"Songlist"> | string
    description?: StringNullableWithAggregatesFilter<"Songlist"> | string | null
    cover?: StringNullableWithAggregatesFilter<"Songlist"> | string | null
    userId?: StringWithAggregatesFilter<"Songlist"> | string
  }

  export type SongCollectionWhereInput = {
    AND?: SongCollectionWhereInput | SongCollectionWhereInput[]
    OR?: SongCollectionWhereInput[]
    NOT?: SongCollectionWhereInput | SongCollectionWhereInput[]
    id?: IntFilter<"SongCollection"> | number
    songId?: IntFilter<"SongCollection"> | number
    songlistId?: StringFilter<"SongCollection"> | string
    createdAt?: DateTimeFilter<"SongCollection"> | Date | string
    song?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
    songlist?: XOR<SonglistScalarRelationFilter, SonglistWhereInput>
  }

  export type SongCollectionOrderByWithRelationInput = {
    id?: SortOrder
    songId?: SortOrder
    songlistId?: SortOrder
    createdAt?: SortOrder
    song?: SongItemOrderByWithRelationInput
    songlist?: SonglistOrderByWithRelationInput
  }

  export type SongCollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    songId_songlistId?: SongCollectionSongIdSonglistIdCompoundUniqueInput
    AND?: SongCollectionWhereInput | SongCollectionWhereInput[]
    OR?: SongCollectionWhereInput[]
    NOT?: SongCollectionWhereInput | SongCollectionWhereInput[]
    songId?: IntFilter<"SongCollection"> | number
    songlistId?: StringFilter<"SongCollection"> | string
    createdAt?: DateTimeFilter<"SongCollection"> | Date | string
    song?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
    songlist?: XOR<SonglistScalarRelationFilter, SonglistWhereInput>
  }, "id" | "songId_songlistId">

  export type SongCollectionOrderByWithAggregationInput = {
    id?: SortOrder
    songId?: SortOrder
    songlistId?: SortOrder
    createdAt?: SortOrder
    _count?: SongCollectionCountOrderByAggregateInput
    _avg?: SongCollectionAvgOrderByAggregateInput
    _max?: SongCollectionMaxOrderByAggregateInput
    _min?: SongCollectionMinOrderByAggregateInput
    _sum?: SongCollectionSumOrderByAggregateInput
  }

  export type SongCollectionScalarWhereWithAggregatesInput = {
    AND?: SongCollectionScalarWhereWithAggregatesInput | SongCollectionScalarWhereWithAggregatesInput[]
    OR?: SongCollectionScalarWhereWithAggregatesInput[]
    NOT?: SongCollectionScalarWhereWithAggregatesInput | SongCollectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SongCollection"> | number
    songId?: IntWithAggregatesFilter<"SongCollection"> | number
    songlistId?: StringWithAggregatesFilter<"SongCollection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SongCollection"> | Date | string
  }

  export type SongItemWhereInput = {
    AND?: SongItemWhereInput | SongItemWhereInput[]
    OR?: SongItemWhereInput[]
    NOT?: SongItemWhereInput | SongItemWhereInput[]
    id?: IntFilter<"SongItem"> | number
    title?: StringFilter<"SongItem"> | string
    releaseDate?: DateTimeNullableFilter<"SongItem"> | Date | string | null
    runtime?: StringNullableFilter<"SongItem"> | string | null
    cover?: StringNullableFilter<"SongItem"> | string | null
    links?: LinkListRelationFilter
    artists?: SongArtistListRelationFilter
    genres?: SongGenreListRelationFilter
    songs?: SongCollectionListRelationFilter
  }

  export type SongItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    runtime?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    links?: LinkOrderByRelationAggregateInput
    artists?: SongArtistOrderByRelationAggregateInput
    genres?: SongGenreOrderByRelationAggregateInput
    songs?: SongCollectionOrderByRelationAggregateInput
  }

  export type SongItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SongItemWhereInput | SongItemWhereInput[]
    OR?: SongItemWhereInput[]
    NOT?: SongItemWhereInput | SongItemWhereInput[]
    title?: StringFilter<"SongItem"> | string
    releaseDate?: DateTimeNullableFilter<"SongItem"> | Date | string | null
    runtime?: StringNullableFilter<"SongItem"> | string | null
    cover?: StringNullableFilter<"SongItem"> | string | null
    links?: LinkListRelationFilter
    artists?: SongArtistListRelationFilter
    genres?: SongGenreListRelationFilter
    songs?: SongCollectionListRelationFilter
  }, "id">

  export type SongItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    runtime?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    _count?: SongItemCountOrderByAggregateInput
    _avg?: SongItemAvgOrderByAggregateInput
    _max?: SongItemMaxOrderByAggregateInput
    _min?: SongItemMinOrderByAggregateInput
    _sum?: SongItemSumOrderByAggregateInput
  }

  export type SongItemScalarWhereWithAggregatesInput = {
    AND?: SongItemScalarWhereWithAggregatesInput | SongItemScalarWhereWithAggregatesInput[]
    OR?: SongItemScalarWhereWithAggregatesInput[]
    NOT?: SongItemScalarWhereWithAggregatesInput | SongItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SongItem"> | number
    title?: StringWithAggregatesFilter<"SongItem"> | string
    releaseDate?: DateTimeNullableWithAggregatesFilter<"SongItem"> | Date | string | null
    runtime?: StringNullableWithAggregatesFilter<"SongItem"> | string | null
    cover?: StringNullableWithAggregatesFilter<"SongItem"> | string | null
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: IntFilter<"Link"> | number
    songItemId?: IntFilter<"Link"> | number
    platform?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    songItem?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    songItemId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    songItem?: SongItemOrderByWithRelationInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    songItemId?: IntFilter<"Link"> | number
    platform?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    songItem?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    songItemId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Link"> | number
    songItemId?: IntWithAggregatesFilter<"Link"> | number
    platform?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
  }

  export type SongArtistWhereInput = {
    AND?: SongArtistWhereInput | SongArtistWhereInput[]
    OR?: SongArtistWhereInput[]
    NOT?: SongArtistWhereInput | SongArtistWhereInput[]
    songItemId?: IntFilter<"SongArtist"> | number
    artistId?: IntFilter<"SongArtist"> | number
    songItem?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }

  export type SongArtistOrderByWithRelationInput = {
    songItemId?: SortOrder
    artistId?: SortOrder
    songItem?: SongItemOrderByWithRelationInput
    artist?: ArtistOrderByWithRelationInput
  }

  export type SongArtistWhereUniqueInput = Prisma.AtLeast<{
    songItemId_artistId?: SongArtistSongItemIdArtistIdCompoundUniqueInput
    AND?: SongArtistWhereInput | SongArtistWhereInput[]
    OR?: SongArtistWhereInput[]
    NOT?: SongArtistWhereInput | SongArtistWhereInput[]
    songItemId?: IntFilter<"SongArtist"> | number
    artistId?: IntFilter<"SongArtist"> | number
    songItem?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
  }, "songItemId_artistId">

  export type SongArtistOrderByWithAggregationInput = {
    songItemId?: SortOrder
    artistId?: SortOrder
    _count?: SongArtistCountOrderByAggregateInput
    _avg?: SongArtistAvgOrderByAggregateInput
    _max?: SongArtistMaxOrderByAggregateInput
    _min?: SongArtistMinOrderByAggregateInput
    _sum?: SongArtistSumOrderByAggregateInput
  }

  export type SongArtistScalarWhereWithAggregatesInput = {
    AND?: SongArtistScalarWhereWithAggregatesInput | SongArtistScalarWhereWithAggregatesInput[]
    OR?: SongArtistScalarWhereWithAggregatesInput[]
    NOT?: SongArtistScalarWhereWithAggregatesInput | SongArtistScalarWhereWithAggregatesInput[]
    songItemId?: IntWithAggregatesFilter<"SongArtist"> | number
    artistId?: IntWithAggregatesFilter<"SongArtist"> | number
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: IntFilter<"Artist"> | number
    name?: StringFilter<"Artist"> | string
    songs?: SongArtistListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    songs?: SongArtistOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    songs?: SongArtistListRelationFilter
  }, "id" | "name">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artist"> | number
    name?: StringWithAggregatesFilter<"Artist"> | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    songs?: SongGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    songs?: SongGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    songs?: SongGenreListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type SongGenreWhereInput = {
    AND?: SongGenreWhereInput | SongGenreWhereInput[]
    OR?: SongGenreWhereInput[]
    NOT?: SongGenreWhereInput | SongGenreWhereInput[]
    songItemId?: IntFilter<"SongGenre"> | number
    genreId?: IntFilter<"SongGenre"> | number
    songItem?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }

  export type SongGenreOrderByWithRelationInput = {
    songItemId?: SortOrder
    genreId?: SortOrder
    songItem?: SongItemOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type SongGenreWhereUniqueInput = Prisma.AtLeast<{
    songItemId_genreId?: SongGenreSongItemIdGenreIdCompoundUniqueInput
    AND?: SongGenreWhereInput | SongGenreWhereInput[]
    OR?: SongGenreWhereInput[]
    NOT?: SongGenreWhereInput | SongGenreWhereInput[]
    songItemId?: IntFilter<"SongGenre"> | number
    genreId?: IntFilter<"SongGenre"> | number
    songItem?: XOR<SongItemScalarRelationFilter, SongItemWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }, "songItemId_genreId">

  export type SongGenreOrderByWithAggregationInput = {
    songItemId?: SortOrder
    genreId?: SortOrder
    _count?: SongGenreCountOrderByAggregateInput
    _avg?: SongGenreAvgOrderByAggregateInput
    _max?: SongGenreMaxOrderByAggregateInput
    _min?: SongGenreMinOrderByAggregateInput
    _sum?: SongGenreSumOrderByAggregateInput
  }

  export type SongGenreScalarWhereWithAggregatesInput = {
    AND?: SongGenreScalarWhereWithAggregatesInput | SongGenreScalarWhereWithAggregatesInput[]
    OR?: SongGenreScalarWhereWithAggregatesInput[]
    NOT?: SongGenreScalarWhereWithAggregatesInput | SongGenreScalarWhereWithAggregatesInput[]
    songItemId?: IntWithAggregatesFilter<"SongGenre"> | number
    genreId?: IntWithAggregatesFilter<"SongGenre"> | number
  }

  export type UserCreateInput = {
    id: string
    songlists?: SonglistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    songlists?: SonglistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songlists?: SonglistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    songlists?: SonglistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SonglistCreateInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
    user: UserCreateNestedOneWithoutSonglistsInput
    songs?: SongCollectionCreateNestedManyWithoutSonglistInput
  }

  export type SonglistUncheckedCreateInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
    userId: string
    songs?: SongCollectionUncheckedCreateNestedManyWithoutSonglistInput
  }

  export type SonglistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSonglistsNestedInput
    songs?: SongCollectionUpdateManyWithoutSonglistNestedInput
  }

  export type SonglistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    songs?: SongCollectionUncheckedUpdateManyWithoutSonglistNestedInput
  }

  export type SonglistCreateManyInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
    userId: string
  }

  export type SonglistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SonglistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SongCollectionCreateInput = {
    createdAt?: Date | string
    song: SongItemCreateNestedOneWithoutSongsInput
    songlist: SonglistCreateNestedOneWithoutSongsInput
  }

  export type SongCollectionUncheckedCreateInput = {
    id?: number
    songId: number
    songlistId: string
    createdAt?: Date | string
  }

  export type SongCollectionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongItemUpdateOneRequiredWithoutSongsNestedInput
    songlist?: SonglistUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongCollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    songlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCollectionCreateManyInput = {
    id?: number
    songId: number
    songlistId: string
    createdAt?: Date | string
  }

  export type SongCollectionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    songlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongItemCreateInput = {
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkCreateNestedManyWithoutSongItemInput
    artists?: SongArtistCreateNestedManyWithoutSongItemInput
    genres?: SongGenreCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionCreateNestedManyWithoutSongInput
  }

  export type SongItemUncheckedCreateInput = {
    id?: number
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkUncheckedCreateNestedManyWithoutSongItemInput
    artists?: SongArtistUncheckedCreateNestedManyWithoutSongItemInput
    genres?: SongGenreUncheckedCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUpdateManyWithoutSongItemNestedInput
    artists?: SongArtistUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUpdateManyWithoutSongNestedInput
  }

  export type SongItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUncheckedUpdateManyWithoutSongItemNestedInput
    artists?: SongArtistUncheckedUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUncheckedUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongItemCreateManyInput = {
    id?: number
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
  }

  export type SongItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkCreateInput = {
    platform: string
    url: string
    songItem: SongItemCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateInput = {
    id?: number
    songItemId: number
    platform: string
    url: string
  }

  export type LinkUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    songItem?: SongItemUpdateOneRequiredWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    songItemId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkCreateManyInput = {
    id?: number
    songItemId: number
    platform: string
    url: string
  }

  export type LinkUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    songItemId?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SongArtistCreateInput = {
    songItem: SongItemCreateNestedOneWithoutArtistsInput
    artist: ArtistCreateNestedOneWithoutSongsInput
  }

  export type SongArtistUncheckedCreateInput = {
    songItemId: number
    artistId: number
  }

  export type SongArtistUpdateInput = {
    songItem?: SongItemUpdateOneRequiredWithoutArtistsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongArtistUncheckedUpdateInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type SongArtistCreateManyInput = {
    songItemId: number
    artistId: number
  }

  export type SongArtistUpdateManyMutationInput = {

  }

  export type SongArtistUncheckedUpdateManyInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistCreateInput = {
    name: string
    songs?: SongArtistCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    name: string
    songs?: SongArtistUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    songs?: SongArtistUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    songs?: SongArtistUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    name: string
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    name: string
    songs?: SongGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    songs?: SongGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    songs?: SongGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    songs?: SongGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SongGenreCreateInput = {
    songItem: SongItemCreateNestedOneWithoutGenresInput
    genre: GenreCreateNestedOneWithoutSongsInput
  }

  export type SongGenreUncheckedCreateInput = {
    songItemId: number
    genreId: number
  }

  export type SongGenreUpdateInput = {
    songItem?: SongItemUpdateOneRequiredWithoutGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongGenreUncheckedUpdateInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type SongGenreCreateManyInput = {
    songItemId: number
    genreId: number
  }

  export type SongGenreUpdateManyMutationInput = {

  }

  export type SongGenreUncheckedUpdateManyInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SonglistListRelationFilter = {
    every?: SonglistWhereInput
    some?: SonglistWhereInput
    none?: SonglistWhereInput
  }

  export type SonglistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SongCollectionListRelationFilter = {
    every?: SongCollectionWhereInput
    some?: SongCollectionWhereInput
    none?: SongCollectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SongCollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SonglistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    userId?: SortOrder
  }

  export type SonglistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    userId?: SortOrder
  }

  export type SonglistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SongItemScalarRelationFilter = {
    is?: SongItemWhereInput
    isNot?: SongItemWhereInput
  }

  export type SonglistScalarRelationFilter = {
    is?: SonglistWhereInput
    isNot?: SonglistWhereInput
  }

  export type SongCollectionSongIdSonglistIdCompoundUniqueInput = {
    songId: number
    songlistId: string
  }

  export type SongCollectionCountOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    songlistId?: SortOrder
    createdAt?: SortOrder
  }

  export type SongCollectionAvgOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type SongCollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    songlistId?: SortOrder
    createdAt?: SortOrder
  }

  export type SongCollectionMinOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
    songlistId?: SortOrder
    createdAt?: SortOrder
  }

  export type SongCollectionSumOrderByAggregateInput = {
    id?: SortOrder
    songId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type SongArtistListRelationFilter = {
    every?: SongArtistWhereInput
    some?: SongArtistWhereInput
    none?: SongArtistWhereInput
  }

  export type SongGenreListRelationFilter = {
    every?: SongGenreWhereInput
    some?: SongGenreWhereInput
    none?: SongGenreWhereInput
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SongItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    releaseDate?: SortOrder
    runtime?: SortOrder
    cover?: SortOrder
  }

  export type SongItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SongItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    releaseDate?: SortOrder
    runtime?: SortOrder
    cover?: SortOrder
  }

  export type SongItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    releaseDate?: SortOrder
    runtime?: SortOrder
    cover?: SortOrder
  }

  export type SongItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    songItemId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    id?: SortOrder
    songItemId?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    songItemId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    songItemId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    id?: SortOrder
    songItemId?: SortOrder
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type SongArtistSongItemIdArtistIdCompoundUniqueInput = {
    songItemId: number
    artistId: number
  }

  export type SongArtistCountOrderByAggregateInput = {
    songItemId?: SortOrder
    artistId?: SortOrder
  }

  export type SongArtistAvgOrderByAggregateInput = {
    songItemId?: SortOrder
    artistId?: SortOrder
  }

  export type SongArtistMaxOrderByAggregateInput = {
    songItemId?: SortOrder
    artistId?: SortOrder
  }

  export type SongArtistMinOrderByAggregateInput = {
    songItemId?: SortOrder
    artistId?: SortOrder
  }

  export type SongArtistSumOrderByAggregateInput = {
    songItemId?: SortOrder
    artistId?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type SongGenreSongItemIdGenreIdCompoundUniqueInput = {
    songItemId: number
    genreId: number
  }

  export type SongGenreCountOrderByAggregateInput = {
    songItemId?: SortOrder
    genreId?: SortOrder
  }

  export type SongGenreAvgOrderByAggregateInput = {
    songItemId?: SortOrder
    genreId?: SortOrder
  }

  export type SongGenreMaxOrderByAggregateInput = {
    songItemId?: SortOrder
    genreId?: SortOrder
  }

  export type SongGenreMinOrderByAggregateInput = {
    songItemId?: SortOrder
    genreId?: SortOrder
  }

  export type SongGenreSumOrderByAggregateInput = {
    songItemId?: SortOrder
    genreId?: SortOrder
  }

  export type SonglistCreateNestedManyWithoutUserInput = {
    create?: XOR<SonglistCreateWithoutUserInput, SonglistUncheckedCreateWithoutUserInput> | SonglistCreateWithoutUserInput[] | SonglistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SonglistCreateOrConnectWithoutUserInput | SonglistCreateOrConnectWithoutUserInput[]
    createMany?: SonglistCreateManyUserInputEnvelope
    connect?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
  }

  export type SonglistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SonglistCreateWithoutUserInput, SonglistUncheckedCreateWithoutUserInput> | SonglistCreateWithoutUserInput[] | SonglistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SonglistCreateOrConnectWithoutUserInput | SonglistCreateOrConnectWithoutUserInput[]
    createMany?: SonglistCreateManyUserInputEnvelope
    connect?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SonglistUpdateManyWithoutUserNestedInput = {
    create?: XOR<SonglistCreateWithoutUserInput, SonglistUncheckedCreateWithoutUserInput> | SonglistCreateWithoutUserInput[] | SonglistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SonglistCreateOrConnectWithoutUserInput | SonglistCreateOrConnectWithoutUserInput[]
    upsert?: SonglistUpsertWithWhereUniqueWithoutUserInput | SonglistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SonglistCreateManyUserInputEnvelope
    set?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    disconnect?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    delete?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    connect?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    update?: SonglistUpdateWithWhereUniqueWithoutUserInput | SonglistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SonglistUpdateManyWithWhereWithoutUserInput | SonglistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SonglistScalarWhereInput | SonglistScalarWhereInput[]
  }

  export type SonglistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SonglistCreateWithoutUserInput, SonglistUncheckedCreateWithoutUserInput> | SonglistCreateWithoutUserInput[] | SonglistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SonglistCreateOrConnectWithoutUserInput | SonglistCreateOrConnectWithoutUserInput[]
    upsert?: SonglistUpsertWithWhereUniqueWithoutUserInput | SonglistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SonglistCreateManyUserInputEnvelope
    set?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    disconnect?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    delete?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    connect?: SonglistWhereUniqueInput | SonglistWhereUniqueInput[]
    update?: SonglistUpdateWithWhereUniqueWithoutUserInput | SonglistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SonglistUpdateManyWithWhereWithoutUserInput | SonglistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SonglistScalarWhereInput | SonglistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSonglistsInput = {
    create?: XOR<UserCreateWithoutSonglistsInput, UserUncheckedCreateWithoutSonglistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSonglistsInput
    connect?: UserWhereUniqueInput
  }

  export type SongCollectionCreateNestedManyWithoutSonglistInput = {
    create?: XOR<SongCollectionCreateWithoutSonglistInput, SongCollectionUncheckedCreateWithoutSonglistInput> | SongCollectionCreateWithoutSonglistInput[] | SongCollectionUncheckedCreateWithoutSonglistInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSonglistInput | SongCollectionCreateOrConnectWithoutSonglistInput[]
    createMany?: SongCollectionCreateManySonglistInputEnvelope
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
  }

  export type SongCollectionUncheckedCreateNestedManyWithoutSonglistInput = {
    create?: XOR<SongCollectionCreateWithoutSonglistInput, SongCollectionUncheckedCreateWithoutSonglistInput> | SongCollectionCreateWithoutSonglistInput[] | SongCollectionUncheckedCreateWithoutSonglistInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSonglistInput | SongCollectionCreateOrConnectWithoutSonglistInput[]
    createMany?: SongCollectionCreateManySonglistInputEnvelope
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSonglistsNestedInput = {
    create?: XOR<UserCreateWithoutSonglistsInput, UserUncheckedCreateWithoutSonglistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSonglistsInput
    upsert?: UserUpsertWithoutSonglistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSonglistsInput, UserUpdateWithoutSonglistsInput>, UserUncheckedUpdateWithoutSonglistsInput>
  }

  export type SongCollectionUpdateManyWithoutSonglistNestedInput = {
    create?: XOR<SongCollectionCreateWithoutSonglistInput, SongCollectionUncheckedCreateWithoutSonglistInput> | SongCollectionCreateWithoutSonglistInput[] | SongCollectionUncheckedCreateWithoutSonglistInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSonglistInput | SongCollectionCreateOrConnectWithoutSonglistInput[]
    upsert?: SongCollectionUpsertWithWhereUniqueWithoutSonglistInput | SongCollectionUpsertWithWhereUniqueWithoutSonglistInput[]
    createMany?: SongCollectionCreateManySonglistInputEnvelope
    set?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    disconnect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    delete?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    update?: SongCollectionUpdateWithWhereUniqueWithoutSonglistInput | SongCollectionUpdateWithWhereUniqueWithoutSonglistInput[]
    updateMany?: SongCollectionUpdateManyWithWhereWithoutSonglistInput | SongCollectionUpdateManyWithWhereWithoutSonglistInput[]
    deleteMany?: SongCollectionScalarWhereInput | SongCollectionScalarWhereInput[]
  }

  export type SongCollectionUncheckedUpdateManyWithoutSonglistNestedInput = {
    create?: XOR<SongCollectionCreateWithoutSonglistInput, SongCollectionUncheckedCreateWithoutSonglistInput> | SongCollectionCreateWithoutSonglistInput[] | SongCollectionUncheckedCreateWithoutSonglistInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSonglistInput | SongCollectionCreateOrConnectWithoutSonglistInput[]
    upsert?: SongCollectionUpsertWithWhereUniqueWithoutSonglistInput | SongCollectionUpsertWithWhereUniqueWithoutSonglistInput[]
    createMany?: SongCollectionCreateManySonglistInputEnvelope
    set?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    disconnect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    delete?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    update?: SongCollectionUpdateWithWhereUniqueWithoutSonglistInput | SongCollectionUpdateWithWhereUniqueWithoutSonglistInput[]
    updateMany?: SongCollectionUpdateManyWithWhereWithoutSonglistInput | SongCollectionUpdateManyWithWhereWithoutSonglistInput[]
    deleteMany?: SongCollectionScalarWhereInput | SongCollectionScalarWhereInput[]
  }

  export type SongItemCreateNestedOneWithoutSongsInput = {
    create?: XOR<SongItemCreateWithoutSongsInput, SongItemUncheckedCreateWithoutSongsInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutSongsInput
    connect?: SongItemWhereUniqueInput
  }

  export type SonglistCreateNestedOneWithoutSongsInput = {
    create?: XOR<SonglistCreateWithoutSongsInput, SonglistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: SonglistCreateOrConnectWithoutSongsInput
    connect?: SonglistWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SongItemUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<SongItemCreateWithoutSongsInput, SongItemUncheckedCreateWithoutSongsInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutSongsInput
    upsert?: SongItemUpsertWithoutSongsInput
    connect?: SongItemWhereUniqueInput
    update?: XOR<XOR<SongItemUpdateToOneWithWhereWithoutSongsInput, SongItemUpdateWithoutSongsInput>, SongItemUncheckedUpdateWithoutSongsInput>
  }

  export type SonglistUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<SonglistCreateWithoutSongsInput, SonglistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: SonglistCreateOrConnectWithoutSongsInput
    upsert?: SonglistUpsertWithoutSongsInput
    connect?: SonglistWhereUniqueInput
    update?: XOR<XOR<SonglistUpdateToOneWithWhereWithoutSongsInput, SonglistUpdateWithoutSongsInput>, SonglistUncheckedUpdateWithoutSongsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LinkCreateNestedManyWithoutSongItemInput = {
    create?: XOR<LinkCreateWithoutSongItemInput, LinkUncheckedCreateWithoutSongItemInput> | LinkCreateWithoutSongItemInput[] | LinkUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSongItemInput | LinkCreateOrConnectWithoutSongItemInput[]
    createMany?: LinkCreateManySongItemInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type SongArtistCreateNestedManyWithoutSongItemInput = {
    create?: XOR<SongArtistCreateWithoutSongItemInput, SongArtistUncheckedCreateWithoutSongItemInput> | SongArtistCreateWithoutSongItemInput[] | SongArtistUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutSongItemInput | SongArtistCreateOrConnectWithoutSongItemInput[]
    createMany?: SongArtistCreateManySongItemInputEnvelope
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
  }

  export type SongGenreCreateNestedManyWithoutSongItemInput = {
    create?: XOR<SongGenreCreateWithoutSongItemInput, SongGenreUncheckedCreateWithoutSongItemInput> | SongGenreCreateWithoutSongItemInput[] | SongGenreUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutSongItemInput | SongGenreCreateOrConnectWithoutSongItemInput[]
    createMany?: SongGenreCreateManySongItemInputEnvelope
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
  }

  export type SongCollectionCreateNestedManyWithoutSongInput = {
    create?: XOR<SongCollectionCreateWithoutSongInput, SongCollectionUncheckedCreateWithoutSongInput> | SongCollectionCreateWithoutSongInput[] | SongCollectionUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSongInput | SongCollectionCreateOrConnectWithoutSongInput[]
    createMany?: SongCollectionCreateManySongInputEnvelope
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutSongItemInput = {
    create?: XOR<LinkCreateWithoutSongItemInput, LinkUncheckedCreateWithoutSongItemInput> | LinkCreateWithoutSongItemInput[] | LinkUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSongItemInput | LinkCreateOrConnectWithoutSongItemInput[]
    createMany?: LinkCreateManySongItemInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type SongArtistUncheckedCreateNestedManyWithoutSongItemInput = {
    create?: XOR<SongArtistCreateWithoutSongItemInput, SongArtistUncheckedCreateWithoutSongItemInput> | SongArtistCreateWithoutSongItemInput[] | SongArtistUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutSongItemInput | SongArtistCreateOrConnectWithoutSongItemInput[]
    createMany?: SongArtistCreateManySongItemInputEnvelope
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
  }

  export type SongGenreUncheckedCreateNestedManyWithoutSongItemInput = {
    create?: XOR<SongGenreCreateWithoutSongItemInput, SongGenreUncheckedCreateWithoutSongItemInput> | SongGenreCreateWithoutSongItemInput[] | SongGenreUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutSongItemInput | SongGenreCreateOrConnectWithoutSongItemInput[]
    createMany?: SongGenreCreateManySongItemInputEnvelope
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
  }

  export type SongCollectionUncheckedCreateNestedManyWithoutSongInput = {
    create?: XOR<SongCollectionCreateWithoutSongInput, SongCollectionUncheckedCreateWithoutSongInput> | SongCollectionCreateWithoutSongInput[] | SongCollectionUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSongInput | SongCollectionCreateOrConnectWithoutSongInput[]
    createMany?: SongCollectionCreateManySongInputEnvelope
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LinkUpdateManyWithoutSongItemNestedInput = {
    create?: XOR<LinkCreateWithoutSongItemInput, LinkUncheckedCreateWithoutSongItemInput> | LinkCreateWithoutSongItemInput[] | LinkUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSongItemInput | LinkCreateOrConnectWithoutSongItemInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSongItemInput | LinkUpsertWithWhereUniqueWithoutSongItemInput[]
    createMany?: LinkCreateManySongItemInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSongItemInput | LinkUpdateWithWhereUniqueWithoutSongItemInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSongItemInput | LinkUpdateManyWithWhereWithoutSongItemInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type SongArtistUpdateManyWithoutSongItemNestedInput = {
    create?: XOR<SongArtistCreateWithoutSongItemInput, SongArtistUncheckedCreateWithoutSongItemInput> | SongArtistCreateWithoutSongItemInput[] | SongArtistUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutSongItemInput | SongArtistCreateOrConnectWithoutSongItemInput[]
    upsert?: SongArtistUpsertWithWhereUniqueWithoutSongItemInput | SongArtistUpsertWithWhereUniqueWithoutSongItemInput[]
    createMany?: SongArtistCreateManySongItemInputEnvelope
    set?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    disconnect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    delete?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    update?: SongArtistUpdateWithWhereUniqueWithoutSongItemInput | SongArtistUpdateWithWhereUniqueWithoutSongItemInput[]
    updateMany?: SongArtistUpdateManyWithWhereWithoutSongItemInput | SongArtistUpdateManyWithWhereWithoutSongItemInput[]
    deleteMany?: SongArtistScalarWhereInput | SongArtistScalarWhereInput[]
  }

  export type SongGenreUpdateManyWithoutSongItemNestedInput = {
    create?: XOR<SongGenreCreateWithoutSongItemInput, SongGenreUncheckedCreateWithoutSongItemInput> | SongGenreCreateWithoutSongItemInput[] | SongGenreUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutSongItemInput | SongGenreCreateOrConnectWithoutSongItemInput[]
    upsert?: SongGenreUpsertWithWhereUniqueWithoutSongItemInput | SongGenreUpsertWithWhereUniqueWithoutSongItemInput[]
    createMany?: SongGenreCreateManySongItemInputEnvelope
    set?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    disconnect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    delete?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    update?: SongGenreUpdateWithWhereUniqueWithoutSongItemInput | SongGenreUpdateWithWhereUniqueWithoutSongItemInput[]
    updateMany?: SongGenreUpdateManyWithWhereWithoutSongItemInput | SongGenreUpdateManyWithWhereWithoutSongItemInput[]
    deleteMany?: SongGenreScalarWhereInput | SongGenreScalarWhereInput[]
  }

  export type SongCollectionUpdateManyWithoutSongNestedInput = {
    create?: XOR<SongCollectionCreateWithoutSongInput, SongCollectionUncheckedCreateWithoutSongInput> | SongCollectionCreateWithoutSongInput[] | SongCollectionUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSongInput | SongCollectionCreateOrConnectWithoutSongInput[]
    upsert?: SongCollectionUpsertWithWhereUniqueWithoutSongInput | SongCollectionUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: SongCollectionCreateManySongInputEnvelope
    set?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    disconnect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    delete?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    update?: SongCollectionUpdateWithWhereUniqueWithoutSongInput | SongCollectionUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: SongCollectionUpdateManyWithWhereWithoutSongInput | SongCollectionUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: SongCollectionScalarWhereInput | SongCollectionScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutSongItemNestedInput = {
    create?: XOR<LinkCreateWithoutSongItemInput, LinkUncheckedCreateWithoutSongItemInput> | LinkCreateWithoutSongItemInput[] | LinkUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutSongItemInput | LinkCreateOrConnectWithoutSongItemInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutSongItemInput | LinkUpsertWithWhereUniqueWithoutSongItemInput[]
    createMany?: LinkCreateManySongItemInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutSongItemInput | LinkUpdateWithWhereUniqueWithoutSongItemInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutSongItemInput | LinkUpdateManyWithWhereWithoutSongItemInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type SongArtistUncheckedUpdateManyWithoutSongItemNestedInput = {
    create?: XOR<SongArtistCreateWithoutSongItemInput, SongArtistUncheckedCreateWithoutSongItemInput> | SongArtistCreateWithoutSongItemInput[] | SongArtistUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutSongItemInput | SongArtistCreateOrConnectWithoutSongItemInput[]
    upsert?: SongArtistUpsertWithWhereUniqueWithoutSongItemInput | SongArtistUpsertWithWhereUniqueWithoutSongItemInput[]
    createMany?: SongArtistCreateManySongItemInputEnvelope
    set?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    disconnect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    delete?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    update?: SongArtistUpdateWithWhereUniqueWithoutSongItemInput | SongArtistUpdateWithWhereUniqueWithoutSongItemInput[]
    updateMany?: SongArtistUpdateManyWithWhereWithoutSongItemInput | SongArtistUpdateManyWithWhereWithoutSongItemInput[]
    deleteMany?: SongArtistScalarWhereInput | SongArtistScalarWhereInput[]
  }

  export type SongGenreUncheckedUpdateManyWithoutSongItemNestedInput = {
    create?: XOR<SongGenreCreateWithoutSongItemInput, SongGenreUncheckedCreateWithoutSongItemInput> | SongGenreCreateWithoutSongItemInput[] | SongGenreUncheckedCreateWithoutSongItemInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutSongItemInput | SongGenreCreateOrConnectWithoutSongItemInput[]
    upsert?: SongGenreUpsertWithWhereUniqueWithoutSongItemInput | SongGenreUpsertWithWhereUniqueWithoutSongItemInput[]
    createMany?: SongGenreCreateManySongItemInputEnvelope
    set?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    disconnect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    delete?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    update?: SongGenreUpdateWithWhereUniqueWithoutSongItemInput | SongGenreUpdateWithWhereUniqueWithoutSongItemInput[]
    updateMany?: SongGenreUpdateManyWithWhereWithoutSongItemInput | SongGenreUpdateManyWithWhereWithoutSongItemInput[]
    deleteMany?: SongGenreScalarWhereInput | SongGenreScalarWhereInput[]
  }

  export type SongCollectionUncheckedUpdateManyWithoutSongNestedInput = {
    create?: XOR<SongCollectionCreateWithoutSongInput, SongCollectionUncheckedCreateWithoutSongInput> | SongCollectionCreateWithoutSongInput[] | SongCollectionUncheckedCreateWithoutSongInput[]
    connectOrCreate?: SongCollectionCreateOrConnectWithoutSongInput | SongCollectionCreateOrConnectWithoutSongInput[]
    upsert?: SongCollectionUpsertWithWhereUniqueWithoutSongInput | SongCollectionUpsertWithWhereUniqueWithoutSongInput[]
    createMany?: SongCollectionCreateManySongInputEnvelope
    set?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    disconnect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    delete?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    connect?: SongCollectionWhereUniqueInput | SongCollectionWhereUniqueInput[]
    update?: SongCollectionUpdateWithWhereUniqueWithoutSongInput | SongCollectionUpdateWithWhereUniqueWithoutSongInput[]
    updateMany?: SongCollectionUpdateManyWithWhereWithoutSongInput | SongCollectionUpdateManyWithWhereWithoutSongInput[]
    deleteMany?: SongCollectionScalarWhereInput | SongCollectionScalarWhereInput[]
  }

  export type SongItemCreateNestedOneWithoutLinksInput = {
    create?: XOR<SongItemCreateWithoutLinksInput, SongItemUncheckedCreateWithoutLinksInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutLinksInput
    connect?: SongItemWhereUniqueInput
  }

  export type SongItemUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<SongItemCreateWithoutLinksInput, SongItemUncheckedCreateWithoutLinksInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutLinksInput
    upsert?: SongItemUpsertWithoutLinksInput
    connect?: SongItemWhereUniqueInput
    update?: XOR<XOR<SongItemUpdateToOneWithWhereWithoutLinksInput, SongItemUpdateWithoutLinksInput>, SongItemUncheckedUpdateWithoutLinksInput>
  }

  export type SongItemCreateNestedOneWithoutArtistsInput = {
    create?: XOR<SongItemCreateWithoutArtistsInput, SongItemUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutArtistsInput
    connect?: SongItemWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutSongsInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput
    connect?: ArtistWhereUniqueInput
  }

  export type SongItemUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: XOR<SongItemCreateWithoutArtistsInput, SongItemUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutArtistsInput
    upsert?: SongItemUpsertWithoutArtistsInput
    connect?: SongItemWhereUniqueInput
    update?: XOR<XOR<SongItemUpdateToOneWithWhereWithoutArtistsInput, SongItemUpdateWithoutArtistsInput>, SongItemUncheckedUpdateWithoutArtistsInput>
  }

  export type ArtistUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutSongsInput
    upsert?: ArtistUpsertWithoutSongsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutSongsInput, ArtistUpdateWithoutSongsInput>, ArtistUncheckedUpdateWithoutSongsInput>
  }

  export type SongArtistCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongArtistCreateWithoutArtistInput, SongArtistUncheckedCreateWithoutArtistInput> | SongArtistCreateWithoutArtistInput[] | SongArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutArtistInput | SongArtistCreateOrConnectWithoutArtistInput[]
    createMany?: SongArtistCreateManyArtistInputEnvelope
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
  }

  export type SongArtistUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<SongArtistCreateWithoutArtistInput, SongArtistUncheckedCreateWithoutArtistInput> | SongArtistCreateWithoutArtistInput[] | SongArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutArtistInput | SongArtistCreateOrConnectWithoutArtistInput[]
    createMany?: SongArtistCreateManyArtistInputEnvelope
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
  }

  export type SongArtistUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongArtistCreateWithoutArtistInput, SongArtistUncheckedCreateWithoutArtistInput> | SongArtistCreateWithoutArtistInput[] | SongArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutArtistInput | SongArtistCreateOrConnectWithoutArtistInput[]
    upsert?: SongArtistUpsertWithWhereUniqueWithoutArtistInput | SongArtistUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: SongArtistCreateManyArtistInputEnvelope
    set?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    disconnect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    delete?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    update?: SongArtistUpdateWithWhereUniqueWithoutArtistInput | SongArtistUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongArtistUpdateManyWithWhereWithoutArtistInput | SongArtistUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongArtistScalarWhereInput | SongArtistScalarWhereInput[]
  }

  export type SongArtistUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<SongArtistCreateWithoutArtistInput, SongArtistUncheckedCreateWithoutArtistInput> | SongArtistCreateWithoutArtistInput[] | SongArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: SongArtistCreateOrConnectWithoutArtistInput | SongArtistCreateOrConnectWithoutArtistInput[]
    upsert?: SongArtistUpsertWithWhereUniqueWithoutArtistInput | SongArtistUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: SongArtistCreateManyArtistInputEnvelope
    set?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    disconnect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    delete?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    connect?: SongArtistWhereUniqueInput | SongArtistWhereUniqueInput[]
    update?: SongArtistUpdateWithWhereUniqueWithoutArtistInput | SongArtistUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: SongArtistUpdateManyWithWhereWithoutArtistInput | SongArtistUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: SongArtistScalarWhereInput | SongArtistScalarWhereInput[]
  }

  export type SongGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<SongGenreCreateWithoutGenreInput, SongGenreUncheckedCreateWithoutGenreInput> | SongGenreCreateWithoutGenreInput[] | SongGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutGenreInput | SongGenreCreateOrConnectWithoutGenreInput[]
    createMany?: SongGenreCreateManyGenreInputEnvelope
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
  }

  export type SongGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<SongGenreCreateWithoutGenreInput, SongGenreUncheckedCreateWithoutGenreInput> | SongGenreCreateWithoutGenreInput[] | SongGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutGenreInput | SongGenreCreateOrConnectWithoutGenreInput[]
    createMany?: SongGenreCreateManyGenreInputEnvelope
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
  }

  export type SongGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<SongGenreCreateWithoutGenreInput, SongGenreUncheckedCreateWithoutGenreInput> | SongGenreCreateWithoutGenreInput[] | SongGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutGenreInput | SongGenreCreateOrConnectWithoutGenreInput[]
    upsert?: SongGenreUpsertWithWhereUniqueWithoutGenreInput | SongGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: SongGenreCreateManyGenreInputEnvelope
    set?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    disconnect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    delete?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    update?: SongGenreUpdateWithWhereUniqueWithoutGenreInput | SongGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: SongGenreUpdateManyWithWhereWithoutGenreInput | SongGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: SongGenreScalarWhereInput | SongGenreScalarWhereInput[]
  }

  export type SongGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<SongGenreCreateWithoutGenreInput, SongGenreUncheckedCreateWithoutGenreInput> | SongGenreCreateWithoutGenreInput[] | SongGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: SongGenreCreateOrConnectWithoutGenreInput | SongGenreCreateOrConnectWithoutGenreInput[]
    upsert?: SongGenreUpsertWithWhereUniqueWithoutGenreInput | SongGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: SongGenreCreateManyGenreInputEnvelope
    set?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    disconnect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    delete?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    connect?: SongGenreWhereUniqueInput | SongGenreWhereUniqueInput[]
    update?: SongGenreUpdateWithWhereUniqueWithoutGenreInput | SongGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: SongGenreUpdateManyWithWhereWithoutGenreInput | SongGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: SongGenreScalarWhereInput | SongGenreScalarWhereInput[]
  }

  export type SongItemCreateNestedOneWithoutGenresInput = {
    create?: XOR<SongItemCreateWithoutGenresInput, SongItemUncheckedCreateWithoutGenresInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutGenresInput
    connect?: SongItemWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutSongsInput = {
    create?: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutSongsInput
    connect?: GenreWhereUniqueInput
  }

  export type SongItemUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<SongItemCreateWithoutGenresInput, SongItemUncheckedCreateWithoutGenresInput>
    connectOrCreate?: SongItemCreateOrConnectWithoutGenresInput
    upsert?: SongItemUpsertWithoutGenresInput
    connect?: SongItemWhereUniqueInput
    update?: XOR<XOR<SongItemUpdateToOneWithWhereWithoutGenresInput, SongItemUpdateWithoutGenresInput>, SongItemUncheckedUpdateWithoutGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutSongsNestedInput = {
    create?: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutSongsInput
    upsert?: GenreUpsertWithoutSongsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutSongsInput, GenreUpdateWithoutSongsInput>, GenreUncheckedUpdateWithoutSongsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SonglistCreateWithoutUserInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
    songs?: SongCollectionCreateNestedManyWithoutSonglistInput
  }

  export type SonglistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
    songs?: SongCollectionUncheckedCreateNestedManyWithoutSonglistInput
  }

  export type SonglistCreateOrConnectWithoutUserInput = {
    where: SonglistWhereUniqueInput
    create: XOR<SonglistCreateWithoutUserInput, SonglistUncheckedCreateWithoutUserInput>
  }

  export type SonglistCreateManyUserInputEnvelope = {
    data: SonglistCreateManyUserInput | SonglistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SonglistUpsertWithWhereUniqueWithoutUserInput = {
    where: SonglistWhereUniqueInput
    update: XOR<SonglistUpdateWithoutUserInput, SonglistUncheckedUpdateWithoutUserInput>
    create: XOR<SonglistCreateWithoutUserInput, SonglistUncheckedCreateWithoutUserInput>
  }

  export type SonglistUpdateWithWhereUniqueWithoutUserInput = {
    where: SonglistWhereUniqueInput
    data: XOR<SonglistUpdateWithoutUserInput, SonglistUncheckedUpdateWithoutUserInput>
  }

  export type SonglistUpdateManyWithWhereWithoutUserInput = {
    where: SonglistScalarWhereInput
    data: XOR<SonglistUpdateManyMutationInput, SonglistUncheckedUpdateManyWithoutUserInput>
  }

  export type SonglistScalarWhereInput = {
    AND?: SonglistScalarWhereInput | SonglistScalarWhereInput[]
    OR?: SonglistScalarWhereInput[]
    NOT?: SonglistScalarWhereInput | SonglistScalarWhereInput[]
    id?: StringFilter<"Songlist"> | string
    name?: StringFilter<"Songlist"> | string
    visibility?: StringFilter<"Songlist"> | string
    description?: StringNullableFilter<"Songlist"> | string | null
    cover?: StringNullableFilter<"Songlist"> | string | null
    userId?: StringFilter<"Songlist"> | string
  }

  export type UserCreateWithoutSonglistsInput = {
    id: string
  }

  export type UserUncheckedCreateWithoutSonglistsInput = {
    id: string
  }

  export type UserCreateOrConnectWithoutSonglistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSonglistsInput, UserUncheckedCreateWithoutSonglistsInput>
  }

  export type SongCollectionCreateWithoutSonglistInput = {
    createdAt?: Date | string
    song: SongItemCreateNestedOneWithoutSongsInput
  }

  export type SongCollectionUncheckedCreateWithoutSonglistInput = {
    id?: number
    songId: number
    createdAt?: Date | string
  }

  export type SongCollectionCreateOrConnectWithoutSonglistInput = {
    where: SongCollectionWhereUniqueInput
    create: XOR<SongCollectionCreateWithoutSonglistInput, SongCollectionUncheckedCreateWithoutSonglistInput>
  }

  export type SongCollectionCreateManySonglistInputEnvelope = {
    data: SongCollectionCreateManySonglistInput | SongCollectionCreateManySonglistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSonglistsInput = {
    update: XOR<UserUpdateWithoutSonglistsInput, UserUncheckedUpdateWithoutSonglistsInput>
    create: XOR<UserCreateWithoutSonglistsInput, UserUncheckedCreateWithoutSonglistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSonglistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSonglistsInput, UserUncheckedUpdateWithoutSonglistsInput>
  }

  export type UserUpdateWithoutSonglistsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutSonglistsInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SongCollectionUpsertWithWhereUniqueWithoutSonglistInput = {
    where: SongCollectionWhereUniqueInput
    update: XOR<SongCollectionUpdateWithoutSonglistInput, SongCollectionUncheckedUpdateWithoutSonglistInput>
    create: XOR<SongCollectionCreateWithoutSonglistInput, SongCollectionUncheckedCreateWithoutSonglistInput>
  }

  export type SongCollectionUpdateWithWhereUniqueWithoutSonglistInput = {
    where: SongCollectionWhereUniqueInput
    data: XOR<SongCollectionUpdateWithoutSonglistInput, SongCollectionUncheckedUpdateWithoutSonglistInput>
  }

  export type SongCollectionUpdateManyWithWhereWithoutSonglistInput = {
    where: SongCollectionScalarWhereInput
    data: XOR<SongCollectionUpdateManyMutationInput, SongCollectionUncheckedUpdateManyWithoutSonglistInput>
  }

  export type SongCollectionScalarWhereInput = {
    AND?: SongCollectionScalarWhereInput | SongCollectionScalarWhereInput[]
    OR?: SongCollectionScalarWhereInput[]
    NOT?: SongCollectionScalarWhereInput | SongCollectionScalarWhereInput[]
    id?: IntFilter<"SongCollection"> | number
    songId?: IntFilter<"SongCollection"> | number
    songlistId?: StringFilter<"SongCollection"> | string
    createdAt?: DateTimeFilter<"SongCollection"> | Date | string
  }

  export type SongItemCreateWithoutSongsInput = {
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkCreateNestedManyWithoutSongItemInput
    artists?: SongArtistCreateNestedManyWithoutSongItemInput
    genres?: SongGenreCreateNestedManyWithoutSongItemInput
  }

  export type SongItemUncheckedCreateWithoutSongsInput = {
    id?: number
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkUncheckedCreateNestedManyWithoutSongItemInput
    artists?: SongArtistUncheckedCreateNestedManyWithoutSongItemInput
    genres?: SongGenreUncheckedCreateNestedManyWithoutSongItemInput
  }

  export type SongItemCreateOrConnectWithoutSongsInput = {
    where: SongItemWhereUniqueInput
    create: XOR<SongItemCreateWithoutSongsInput, SongItemUncheckedCreateWithoutSongsInput>
  }

  export type SonglistCreateWithoutSongsInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
    user: UserCreateNestedOneWithoutSonglistsInput
  }

  export type SonglistUncheckedCreateWithoutSongsInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
    userId: string
  }

  export type SonglistCreateOrConnectWithoutSongsInput = {
    where: SonglistWhereUniqueInput
    create: XOR<SonglistCreateWithoutSongsInput, SonglistUncheckedCreateWithoutSongsInput>
  }

  export type SongItemUpsertWithoutSongsInput = {
    update: XOR<SongItemUpdateWithoutSongsInput, SongItemUncheckedUpdateWithoutSongsInput>
    create: XOR<SongItemCreateWithoutSongsInput, SongItemUncheckedCreateWithoutSongsInput>
    where?: SongItemWhereInput
  }

  export type SongItemUpdateToOneWithWhereWithoutSongsInput = {
    where?: SongItemWhereInput
    data: XOR<SongItemUpdateWithoutSongsInput, SongItemUncheckedUpdateWithoutSongsInput>
  }

  export type SongItemUpdateWithoutSongsInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUpdateManyWithoutSongItemNestedInput
    artists?: SongArtistUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUpdateManyWithoutSongItemNestedInput
  }

  export type SongItemUncheckedUpdateWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUncheckedUpdateManyWithoutSongItemNestedInput
    artists?: SongArtistUncheckedUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUncheckedUpdateManyWithoutSongItemNestedInput
  }

  export type SonglistUpsertWithoutSongsInput = {
    update: XOR<SonglistUpdateWithoutSongsInput, SonglistUncheckedUpdateWithoutSongsInput>
    create: XOR<SonglistCreateWithoutSongsInput, SonglistUncheckedCreateWithoutSongsInput>
    where?: SonglistWhereInput
  }

  export type SonglistUpdateToOneWithWhereWithoutSongsInput = {
    where?: SonglistWhereInput
    data: XOR<SonglistUpdateWithoutSongsInput, SonglistUncheckedUpdateWithoutSongsInput>
  }

  export type SonglistUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSonglistsNestedInput
  }

  export type SonglistUncheckedUpdateWithoutSongsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkCreateWithoutSongItemInput = {
    platform: string
    url: string
  }

  export type LinkUncheckedCreateWithoutSongItemInput = {
    id?: number
    platform: string
    url: string
  }

  export type LinkCreateOrConnectWithoutSongItemInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutSongItemInput, LinkUncheckedCreateWithoutSongItemInput>
  }

  export type LinkCreateManySongItemInputEnvelope = {
    data: LinkCreateManySongItemInput | LinkCreateManySongItemInput[]
    skipDuplicates?: boolean
  }

  export type SongArtistCreateWithoutSongItemInput = {
    artist: ArtistCreateNestedOneWithoutSongsInput
  }

  export type SongArtistUncheckedCreateWithoutSongItemInput = {
    artistId: number
  }

  export type SongArtistCreateOrConnectWithoutSongItemInput = {
    where: SongArtistWhereUniqueInput
    create: XOR<SongArtistCreateWithoutSongItemInput, SongArtistUncheckedCreateWithoutSongItemInput>
  }

  export type SongArtistCreateManySongItemInputEnvelope = {
    data: SongArtistCreateManySongItemInput | SongArtistCreateManySongItemInput[]
    skipDuplicates?: boolean
  }

  export type SongGenreCreateWithoutSongItemInput = {
    genre: GenreCreateNestedOneWithoutSongsInput
  }

  export type SongGenreUncheckedCreateWithoutSongItemInput = {
    genreId: number
  }

  export type SongGenreCreateOrConnectWithoutSongItemInput = {
    where: SongGenreWhereUniqueInput
    create: XOR<SongGenreCreateWithoutSongItemInput, SongGenreUncheckedCreateWithoutSongItemInput>
  }

  export type SongGenreCreateManySongItemInputEnvelope = {
    data: SongGenreCreateManySongItemInput | SongGenreCreateManySongItemInput[]
    skipDuplicates?: boolean
  }

  export type SongCollectionCreateWithoutSongInput = {
    createdAt?: Date | string
    songlist: SonglistCreateNestedOneWithoutSongsInput
  }

  export type SongCollectionUncheckedCreateWithoutSongInput = {
    id?: number
    songlistId: string
    createdAt?: Date | string
  }

  export type SongCollectionCreateOrConnectWithoutSongInput = {
    where: SongCollectionWhereUniqueInput
    create: XOR<SongCollectionCreateWithoutSongInput, SongCollectionUncheckedCreateWithoutSongInput>
  }

  export type SongCollectionCreateManySongInputEnvelope = {
    data: SongCollectionCreateManySongInput | SongCollectionCreateManySongInput[]
    skipDuplicates?: boolean
  }

  export type LinkUpsertWithWhereUniqueWithoutSongItemInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutSongItemInput, LinkUncheckedUpdateWithoutSongItemInput>
    create: XOR<LinkCreateWithoutSongItemInput, LinkUncheckedCreateWithoutSongItemInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutSongItemInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutSongItemInput, LinkUncheckedUpdateWithoutSongItemInput>
  }

  export type LinkUpdateManyWithWhereWithoutSongItemInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutSongItemInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: IntFilter<"Link"> | number
    songItemId?: IntFilter<"Link"> | number
    platform?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
  }

  export type SongArtistUpsertWithWhereUniqueWithoutSongItemInput = {
    where: SongArtistWhereUniqueInput
    update: XOR<SongArtistUpdateWithoutSongItemInput, SongArtistUncheckedUpdateWithoutSongItemInput>
    create: XOR<SongArtistCreateWithoutSongItemInput, SongArtistUncheckedCreateWithoutSongItemInput>
  }

  export type SongArtistUpdateWithWhereUniqueWithoutSongItemInput = {
    where: SongArtistWhereUniqueInput
    data: XOR<SongArtistUpdateWithoutSongItemInput, SongArtistUncheckedUpdateWithoutSongItemInput>
  }

  export type SongArtistUpdateManyWithWhereWithoutSongItemInput = {
    where: SongArtistScalarWhereInput
    data: XOR<SongArtistUpdateManyMutationInput, SongArtistUncheckedUpdateManyWithoutSongItemInput>
  }

  export type SongArtistScalarWhereInput = {
    AND?: SongArtistScalarWhereInput | SongArtistScalarWhereInput[]
    OR?: SongArtistScalarWhereInput[]
    NOT?: SongArtistScalarWhereInput | SongArtistScalarWhereInput[]
    songItemId?: IntFilter<"SongArtist"> | number
    artistId?: IntFilter<"SongArtist"> | number
  }

  export type SongGenreUpsertWithWhereUniqueWithoutSongItemInput = {
    where: SongGenreWhereUniqueInput
    update: XOR<SongGenreUpdateWithoutSongItemInput, SongGenreUncheckedUpdateWithoutSongItemInput>
    create: XOR<SongGenreCreateWithoutSongItemInput, SongGenreUncheckedCreateWithoutSongItemInput>
  }

  export type SongGenreUpdateWithWhereUniqueWithoutSongItemInput = {
    where: SongGenreWhereUniqueInput
    data: XOR<SongGenreUpdateWithoutSongItemInput, SongGenreUncheckedUpdateWithoutSongItemInput>
  }

  export type SongGenreUpdateManyWithWhereWithoutSongItemInput = {
    where: SongGenreScalarWhereInput
    data: XOR<SongGenreUpdateManyMutationInput, SongGenreUncheckedUpdateManyWithoutSongItemInput>
  }

  export type SongGenreScalarWhereInput = {
    AND?: SongGenreScalarWhereInput | SongGenreScalarWhereInput[]
    OR?: SongGenreScalarWhereInput[]
    NOT?: SongGenreScalarWhereInput | SongGenreScalarWhereInput[]
    songItemId?: IntFilter<"SongGenre"> | number
    genreId?: IntFilter<"SongGenre"> | number
  }

  export type SongCollectionUpsertWithWhereUniqueWithoutSongInput = {
    where: SongCollectionWhereUniqueInput
    update: XOR<SongCollectionUpdateWithoutSongInput, SongCollectionUncheckedUpdateWithoutSongInput>
    create: XOR<SongCollectionCreateWithoutSongInput, SongCollectionUncheckedCreateWithoutSongInput>
  }

  export type SongCollectionUpdateWithWhereUniqueWithoutSongInput = {
    where: SongCollectionWhereUniqueInput
    data: XOR<SongCollectionUpdateWithoutSongInput, SongCollectionUncheckedUpdateWithoutSongInput>
  }

  export type SongCollectionUpdateManyWithWhereWithoutSongInput = {
    where: SongCollectionScalarWhereInput
    data: XOR<SongCollectionUpdateManyMutationInput, SongCollectionUncheckedUpdateManyWithoutSongInput>
  }

  export type SongItemCreateWithoutLinksInput = {
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    artists?: SongArtistCreateNestedManyWithoutSongItemInput
    genres?: SongGenreCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionCreateNestedManyWithoutSongInput
  }

  export type SongItemUncheckedCreateWithoutLinksInput = {
    id?: number
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    artists?: SongArtistUncheckedCreateNestedManyWithoutSongItemInput
    genres?: SongGenreUncheckedCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongItemCreateOrConnectWithoutLinksInput = {
    where: SongItemWhereUniqueInput
    create: XOR<SongItemCreateWithoutLinksInput, SongItemUncheckedCreateWithoutLinksInput>
  }

  export type SongItemUpsertWithoutLinksInput = {
    update: XOR<SongItemUpdateWithoutLinksInput, SongItemUncheckedUpdateWithoutLinksInput>
    create: XOR<SongItemCreateWithoutLinksInput, SongItemUncheckedCreateWithoutLinksInput>
    where?: SongItemWhereInput
  }

  export type SongItemUpdateToOneWithWhereWithoutLinksInput = {
    where?: SongItemWhereInput
    data: XOR<SongItemUpdateWithoutLinksInput, SongItemUncheckedUpdateWithoutLinksInput>
  }

  export type SongItemUpdateWithoutLinksInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: SongArtistUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUpdateManyWithoutSongNestedInput
  }

  export type SongItemUncheckedUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: SongArtistUncheckedUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUncheckedUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUncheckedUpdateManyWithoutSongNestedInput
  }

  export type SongItemCreateWithoutArtistsInput = {
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkCreateNestedManyWithoutSongItemInput
    genres?: SongGenreCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionCreateNestedManyWithoutSongInput
  }

  export type SongItemUncheckedCreateWithoutArtistsInput = {
    id?: number
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkUncheckedCreateNestedManyWithoutSongItemInput
    genres?: SongGenreUncheckedCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongItemCreateOrConnectWithoutArtistsInput = {
    where: SongItemWhereUniqueInput
    create: XOR<SongItemCreateWithoutArtistsInput, SongItemUncheckedCreateWithoutArtistsInput>
  }

  export type ArtistCreateWithoutSongsInput = {
    name: string
  }

  export type ArtistUncheckedCreateWithoutSongsInput = {
    id?: number
    name: string
  }

  export type ArtistCreateOrConnectWithoutSongsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
  }

  export type SongItemUpsertWithoutArtistsInput = {
    update: XOR<SongItemUpdateWithoutArtistsInput, SongItemUncheckedUpdateWithoutArtistsInput>
    create: XOR<SongItemCreateWithoutArtistsInput, SongItemUncheckedCreateWithoutArtistsInput>
    where?: SongItemWhereInput
  }

  export type SongItemUpdateToOneWithWhereWithoutArtistsInput = {
    where?: SongItemWhereInput
    data: XOR<SongItemUpdateWithoutArtistsInput, SongItemUncheckedUpdateWithoutArtistsInput>
  }

  export type SongItemUpdateWithoutArtistsInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUpdateManyWithoutSongNestedInput
  }

  export type SongItemUncheckedUpdateWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUncheckedUpdateManyWithoutSongItemNestedInput
    genres?: SongGenreUncheckedUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUncheckedUpdateManyWithoutSongNestedInput
  }

  export type ArtistUpsertWithoutSongsInput = {
    update: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
    create: XOR<ArtistCreateWithoutSongsInput, ArtistUncheckedCreateWithoutSongsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutSongsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutSongsInput, ArtistUncheckedUpdateWithoutSongsInput>
  }

  export type ArtistUpdateWithoutSongsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SongArtistCreateWithoutArtistInput = {
    songItem: SongItemCreateNestedOneWithoutArtistsInput
  }

  export type SongArtistUncheckedCreateWithoutArtistInput = {
    songItemId: number
  }

  export type SongArtistCreateOrConnectWithoutArtistInput = {
    where: SongArtistWhereUniqueInput
    create: XOR<SongArtistCreateWithoutArtistInput, SongArtistUncheckedCreateWithoutArtistInput>
  }

  export type SongArtistCreateManyArtistInputEnvelope = {
    data: SongArtistCreateManyArtistInput | SongArtistCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type SongArtistUpsertWithWhereUniqueWithoutArtistInput = {
    where: SongArtistWhereUniqueInput
    update: XOR<SongArtistUpdateWithoutArtistInput, SongArtistUncheckedUpdateWithoutArtistInput>
    create: XOR<SongArtistCreateWithoutArtistInput, SongArtistUncheckedCreateWithoutArtistInput>
  }

  export type SongArtistUpdateWithWhereUniqueWithoutArtistInput = {
    where: SongArtistWhereUniqueInput
    data: XOR<SongArtistUpdateWithoutArtistInput, SongArtistUncheckedUpdateWithoutArtistInput>
  }

  export type SongArtistUpdateManyWithWhereWithoutArtistInput = {
    where: SongArtistScalarWhereInput
    data: XOR<SongArtistUpdateManyMutationInput, SongArtistUncheckedUpdateManyWithoutArtistInput>
  }

  export type SongGenreCreateWithoutGenreInput = {
    songItem: SongItemCreateNestedOneWithoutGenresInput
  }

  export type SongGenreUncheckedCreateWithoutGenreInput = {
    songItemId: number
  }

  export type SongGenreCreateOrConnectWithoutGenreInput = {
    where: SongGenreWhereUniqueInput
    create: XOR<SongGenreCreateWithoutGenreInput, SongGenreUncheckedCreateWithoutGenreInput>
  }

  export type SongGenreCreateManyGenreInputEnvelope = {
    data: SongGenreCreateManyGenreInput | SongGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type SongGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: SongGenreWhereUniqueInput
    update: XOR<SongGenreUpdateWithoutGenreInput, SongGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<SongGenreCreateWithoutGenreInput, SongGenreUncheckedCreateWithoutGenreInput>
  }

  export type SongGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: SongGenreWhereUniqueInput
    data: XOR<SongGenreUpdateWithoutGenreInput, SongGenreUncheckedUpdateWithoutGenreInput>
  }

  export type SongGenreUpdateManyWithWhereWithoutGenreInput = {
    where: SongGenreScalarWhereInput
    data: XOR<SongGenreUpdateManyMutationInput, SongGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type SongItemCreateWithoutGenresInput = {
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkCreateNestedManyWithoutSongItemInput
    artists?: SongArtistCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionCreateNestedManyWithoutSongInput
  }

  export type SongItemUncheckedCreateWithoutGenresInput = {
    id?: number
    title: string
    releaseDate?: Date | string | null
    runtime?: string | null
    cover?: string | null
    links?: LinkUncheckedCreateNestedManyWithoutSongItemInput
    artists?: SongArtistUncheckedCreateNestedManyWithoutSongItemInput
    songs?: SongCollectionUncheckedCreateNestedManyWithoutSongInput
  }

  export type SongItemCreateOrConnectWithoutGenresInput = {
    where: SongItemWhereUniqueInput
    create: XOR<SongItemCreateWithoutGenresInput, SongItemUncheckedCreateWithoutGenresInput>
  }

  export type GenreCreateWithoutSongsInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutSongsInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutSongsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput>
  }

  export type SongItemUpsertWithoutGenresInput = {
    update: XOR<SongItemUpdateWithoutGenresInput, SongItemUncheckedUpdateWithoutGenresInput>
    create: XOR<SongItemCreateWithoutGenresInput, SongItemUncheckedCreateWithoutGenresInput>
    where?: SongItemWhereInput
  }

  export type SongItemUpdateToOneWithWhereWithoutGenresInput = {
    where?: SongItemWhereInput
    data: XOR<SongItemUpdateWithoutGenresInput, SongItemUncheckedUpdateWithoutGenresInput>
  }

  export type SongItemUpdateWithoutGenresInput = {
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUpdateManyWithoutSongItemNestedInput
    artists?: SongArtistUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUpdateManyWithoutSongNestedInput
  }

  export type SongItemUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    runtime?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    links?: LinkUncheckedUpdateManyWithoutSongItemNestedInput
    artists?: SongArtistUncheckedUpdateManyWithoutSongItemNestedInput
    songs?: SongCollectionUncheckedUpdateManyWithoutSongNestedInput
  }

  export type GenreUpsertWithoutSongsInput = {
    update: XOR<GenreUpdateWithoutSongsInput, GenreUncheckedUpdateWithoutSongsInput>
    create: XOR<GenreCreateWithoutSongsInput, GenreUncheckedCreateWithoutSongsInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutSongsInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutSongsInput, GenreUncheckedUpdateWithoutSongsInput>
  }

  export type GenreUpdateWithoutSongsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutSongsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SonglistCreateManyUserInput = {
    id?: string
    name: string
    visibility: string
    description?: string | null
    cover?: string | null
  }

  export type SonglistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    songs?: SongCollectionUpdateManyWithoutSonglistNestedInput
  }

  export type SonglistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    songs?: SongCollectionUncheckedUpdateManyWithoutSonglistNestedInput
  }

  export type SonglistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SongCollectionCreateManySonglistInput = {
    id?: number
    songId: number
    createdAt?: Date | string
  }

  export type SongCollectionUpdateWithoutSonglistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    song?: SongItemUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongCollectionUncheckedUpdateWithoutSonglistInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCollectionUncheckedUpdateManyWithoutSonglistInput = {
    id?: IntFieldUpdateOperationsInput | number
    songId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateManySongItemInput = {
    id?: number
    platform: string
    url: string
  }

  export type SongArtistCreateManySongItemInput = {
    artistId: number
  }

  export type SongGenreCreateManySongItemInput = {
    genreId: number
  }

  export type SongCollectionCreateManySongInput = {
    id?: number
    songlistId: string
    createdAt?: Date | string
  }

  export type LinkUpdateWithoutSongItemInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateWithoutSongItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyWithoutSongItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SongArtistUpdateWithoutSongItemInput = {
    artist?: ArtistUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongArtistUncheckedUpdateWithoutSongItemInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type SongArtistUncheckedUpdateManyWithoutSongItemInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type SongGenreUpdateWithoutSongItemInput = {
    genre?: GenreUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongGenreUncheckedUpdateWithoutSongItemInput = {
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type SongGenreUncheckedUpdateManyWithoutSongItemInput = {
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type SongCollectionUpdateWithoutSongInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    songlist?: SonglistUpdateOneRequiredWithoutSongsNestedInput
  }

  export type SongCollectionUncheckedUpdateWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    songlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongCollectionUncheckedUpdateManyWithoutSongInput = {
    id?: IntFieldUpdateOperationsInput | number
    songlistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SongArtistCreateManyArtistInput = {
    songItemId: number
  }

  export type SongArtistUpdateWithoutArtistInput = {
    songItem?: SongItemUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type SongArtistUncheckedUpdateWithoutArtistInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
  }

  export type SongArtistUncheckedUpdateManyWithoutArtistInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
  }

  export type SongGenreCreateManyGenreInput = {
    songItemId: number
  }

  export type SongGenreUpdateWithoutGenreInput = {
    songItem?: SongItemUpdateOneRequiredWithoutGenresNestedInput
  }

  export type SongGenreUncheckedUpdateWithoutGenreInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
  }

  export type SongGenreUncheckedUpdateManyWithoutGenreInput = {
    songItemId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}