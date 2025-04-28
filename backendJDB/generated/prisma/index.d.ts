
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>
/**
 * Model Mascotas
 * 
 */
export type Mascotas = $Result.DefaultSelection<Prisma.$MascotasPayload>
/**
 * Model Raza
 * 
 */
export type Raza = $Result.DefaultSelection<Prisma.$RazaPayload>
/**
 * Model Categorias
 * 
 */
export type Categorias = $Result.DefaultSelection<Prisma.$CategoriasPayload>
/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const estado: {
  disponible: 'disponible',
  adoptado: 'adoptado'
};

export type estado = (typeof estado)[keyof typeof estado]

}

export type estado = $Enums.estado

export const estado: typeof $Enums.estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mascotas`: Exposes CRUD operations for the **Mascotas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mascotas
    * const mascotas = await prisma.mascotas.findMany()
    * ```
    */
  get mascotas(): Prisma.MascotasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raza`: Exposes CRUD operations for the **Raza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Razas
    * const razas = await prisma.raza.findMany()
    * ```
    */
  get raza(): Prisma.RazaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **Categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.CategoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuarios: 'Usuarios',
    Mascotas: 'Mascotas',
    Raza: 'Raza',
    Categorias: 'Categorias',
    Genero: 'Genero'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "mascotas" | "raza" | "categorias" | "genero"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Mascotas: {
        payload: Prisma.$MascotasPayload<ExtArgs>
        fields: Prisma.MascotasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MascotasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MascotasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          findFirst: {
            args: Prisma.MascotasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MascotasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          findMany: {
            args: Prisma.MascotasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>[]
          }
          create: {
            args: Prisma.MascotasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          createMany: {
            args: Prisma.MascotasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MascotasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          update: {
            args: Prisma.MascotasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          deleteMany: {
            args: Prisma.MascotasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MascotasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MascotasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MascotasPayload>
          }
          aggregate: {
            args: Prisma.MascotasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMascotas>
          }
          groupBy: {
            args: Prisma.MascotasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MascotasGroupByOutputType>[]
          }
          count: {
            args: Prisma.MascotasCountArgs<ExtArgs>
            result: $Utils.Optional<MascotasCountAggregateOutputType> | number
          }
        }
      }
      Raza: {
        payload: Prisma.$RazaPayload<ExtArgs>
        fields: Prisma.RazaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RazaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RazaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload>
          }
          findFirst: {
            args: Prisma.RazaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RazaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload>
          }
          findMany: {
            args: Prisma.RazaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload>[]
          }
          create: {
            args: Prisma.RazaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload>
          }
          createMany: {
            args: Prisma.RazaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RazaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload>
          }
          update: {
            args: Prisma.RazaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload>
          }
          deleteMany: {
            args: Prisma.RazaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RazaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RazaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazaPayload>
          }
          aggregate: {
            args: Prisma.RazaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaza>
          }
          groupBy: {
            args: Prisma.RazaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RazaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RazaCountArgs<ExtArgs>
            result: $Utils.Optional<RazaCountAggregateOutputType> | number
          }
        }
      }
      Categorias: {
        payload: Prisma.$CategoriasPayload<ExtArgs>
        fields: Prisma.CategoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findFirst: {
            args: Prisma.CategoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          findMany: {
            args: Prisma.CategoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>[]
          }
          create: {
            args: Prisma.CategoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          createMany: {
            args: Prisma.CategoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          update: {
            args: Prisma.CategoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          deleteMany: {
            args: Prisma.CategoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.CategoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    usuarios?: UsuariosOmit
    mascotas?: MascotasOmit
    raza?: RazaOmit
    categorias?: CategoriasOmit
    genero?: GeneroOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    mascotas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | UsuariosCountOutputTypeCountMascotasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountMascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
  }


  /**
   * Count Type RazaCountOutputType
   */

  export type RazaCountOutputType = {
    mascota: number
  }

  export type RazaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | RazaCountOutputTypeCountMascotaArgs
  }

  // Custom InputTypes
  /**
   * RazaCountOutputType without action
   */
  export type RazaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazaCountOutputType
     */
    select?: RazaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RazaCountOutputType without action
   */
  export type RazaCountOutputTypeCountMascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
  }


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    mascota: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | CategoriasCountOutputTypeCountMascotaArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountMascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    mascota: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | GeneroCountOutputTypeCountMascotaArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountMascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password: string
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    mascotas?: boolean | Usuarios$mascotasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type UsuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascotas?: boolean | Usuarios$mascotasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      mascotas: Prisma.$MascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password: string
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascotas<T extends Usuarios$mascotasArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$mascotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'Int'>
    readonly nombre: FieldRef<"Usuarios", 'String'>
    readonly email: FieldRef<"Usuarios", 'String'>
    readonly password: FieldRef<"Usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.mascotas
   */
  export type Usuarios$mascotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    cursor?: MascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
  }


  /**
   * Model Mascotas
   */

  export type AggregateMascotas = {
    _count: MascotasCountAggregateOutputType | null
    _avg: MascotasAvgAggregateOutputType | null
    _sum: MascotasSumAggregateOutputType | null
    _min: MascotasMinAggregateOutputType | null
    _max: MascotasMaxAggregateOutputType | null
  }

  export type MascotasAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    razaId: number | null
    categoriaId: number | null
    generoId: number | null
  }

  export type MascotasSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    razaId: number | null
    categoriaId: number | null
    generoId: number | null
  }

  export type MascotasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    foto: string | null
    estado: $Enums.estado | null
    usuarioId: number | null
    razaId: number | null
    categoriaId: number | null
    generoId: number | null
  }

  export type MascotasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    foto: string | null
    estado: $Enums.estado | null
    usuarioId: number | null
    razaId: number | null
    categoriaId: number | null
    generoId: number | null
  }

  export type MascotasCountAggregateOutputType = {
    id: number
    nombre: number
    foto: number
    estado: number
    usuarioId: number
    razaId: number
    categoriaId: number
    generoId: number
    _all: number
  }


  export type MascotasAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    razaId?: true
    categoriaId?: true
    generoId?: true
  }

  export type MascotasSumAggregateInputType = {
    id?: true
    usuarioId?: true
    razaId?: true
    categoriaId?: true
    generoId?: true
  }

  export type MascotasMinAggregateInputType = {
    id?: true
    nombre?: true
    foto?: true
    estado?: true
    usuarioId?: true
    razaId?: true
    categoriaId?: true
    generoId?: true
  }

  export type MascotasMaxAggregateInputType = {
    id?: true
    nombre?: true
    foto?: true
    estado?: true
    usuarioId?: true
    razaId?: true
    categoriaId?: true
    generoId?: true
  }

  export type MascotasCountAggregateInputType = {
    id?: true
    nombre?: true
    foto?: true
    estado?: true
    usuarioId?: true
    razaId?: true
    categoriaId?: true
    generoId?: true
    _all?: true
  }

  export type MascotasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mascotas to aggregate.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mascotas
    **/
    _count?: true | MascotasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MascotasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MascotasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MascotasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MascotasMaxAggregateInputType
  }

  export type GetMascotasAggregateType<T extends MascotasAggregateArgs> = {
        [P in keyof T & keyof AggregateMascotas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMascotas[P]>
      : GetScalarType<T[P], AggregateMascotas[P]>
  }




  export type MascotasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithAggregationInput | MascotasOrderByWithAggregationInput[]
    by: MascotasScalarFieldEnum[] | MascotasScalarFieldEnum
    having?: MascotasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MascotasCountAggregateInputType | true
    _avg?: MascotasAvgAggregateInputType
    _sum?: MascotasSumAggregateInputType
    _min?: MascotasMinAggregateInputType
    _max?: MascotasMaxAggregateInputType
  }

  export type MascotasGroupByOutputType = {
    id: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    razaId: number
    categoriaId: number
    generoId: number
    _count: MascotasCountAggregateOutputType | null
    _avg: MascotasAvgAggregateOutputType | null
    _sum: MascotasSumAggregateOutputType | null
    _min: MascotasMinAggregateOutputType | null
    _max: MascotasMaxAggregateOutputType | null
  }

  type GetMascotasGroupByPayload<T extends MascotasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MascotasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MascotasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MascotasGroupByOutputType[P]>
            : GetScalarType<T[P], MascotasGroupByOutputType[P]>
        }
      >
    >


  export type MascotasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    foto?: boolean
    estado?: boolean
    usuarioId?: boolean
    razaId?: boolean
    categoriaId?: boolean
    generoId?: boolean
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    raza?: boolean | RazaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mascotas"]>



  export type MascotasSelectScalar = {
    id?: boolean
    nombre?: boolean
    foto?: boolean
    estado?: boolean
    usuarioId?: boolean
    razaId?: boolean
    categoriaId?: boolean
    generoId?: boolean
  }

  export type MascotasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "foto" | "estado" | "usuarioId" | "razaId" | "categoriaId" | "generoId", ExtArgs["result"]["mascotas"]>
  export type MascotasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuariosDefaultArgs<ExtArgs>
    raza?: boolean | RazaDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriasDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }

  export type $MascotasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mascotas"
    objects: {
      usuario: Prisma.$UsuariosPayload<ExtArgs>
      raza: Prisma.$RazaPayload<ExtArgs>
      categoria: Prisma.$CategoriasPayload<ExtArgs>
      genero: Prisma.$GeneroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      foto: string
      estado: $Enums.estado
      usuarioId: number
      razaId: number
      categoriaId: number
      generoId: number
    }, ExtArgs["result"]["mascotas"]>
    composites: {}
  }

  type MascotasGetPayload<S extends boolean | null | undefined | MascotasDefaultArgs> = $Result.GetResult<Prisma.$MascotasPayload, S>

  type MascotasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MascotasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MascotasCountAggregateInputType | true
    }

  export interface MascotasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mascotas'], meta: { name: 'Mascotas' } }
    /**
     * Find zero or one Mascotas that matches the filter.
     * @param {MascotasFindUniqueArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MascotasFindUniqueArgs>(args: SelectSubset<T, MascotasFindUniqueArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mascotas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MascotasFindUniqueOrThrowArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MascotasFindUniqueOrThrowArgs>(args: SelectSubset<T, MascotasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasFindFirstArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MascotasFindFirstArgs>(args?: SelectSubset<T, MascotasFindFirstArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascotas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasFindFirstOrThrowArgs} args - Arguments to find a Mascotas
     * @example
     * // Get one Mascotas
     * const mascotas = await prisma.mascotas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MascotasFindFirstOrThrowArgs>(args?: SelectSubset<T, MascotasFindFirstOrThrowArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mascotas
     * const mascotas = await prisma.mascotas.findMany()
     * 
     * // Get first 10 Mascotas
     * const mascotas = await prisma.mascotas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mascotasWithIdOnly = await prisma.mascotas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MascotasFindManyArgs>(args?: SelectSubset<T, MascotasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mascotas.
     * @param {MascotasCreateArgs} args - Arguments to create a Mascotas.
     * @example
     * // Create one Mascotas
     * const Mascotas = await prisma.mascotas.create({
     *   data: {
     *     // ... data to create a Mascotas
     *   }
     * })
     * 
     */
    create<T extends MascotasCreateArgs>(args: SelectSubset<T, MascotasCreateArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mascotas.
     * @param {MascotasCreateManyArgs} args - Arguments to create many Mascotas.
     * @example
     * // Create many Mascotas
     * const mascotas = await prisma.mascotas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MascotasCreateManyArgs>(args?: SelectSubset<T, MascotasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mascotas.
     * @param {MascotasDeleteArgs} args - Arguments to delete one Mascotas.
     * @example
     * // Delete one Mascotas
     * const Mascotas = await prisma.mascotas.delete({
     *   where: {
     *     // ... filter to delete one Mascotas
     *   }
     * })
     * 
     */
    delete<T extends MascotasDeleteArgs>(args: SelectSubset<T, MascotasDeleteArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mascotas.
     * @param {MascotasUpdateArgs} args - Arguments to update one Mascotas.
     * @example
     * // Update one Mascotas
     * const mascotas = await prisma.mascotas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MascotasUpdateArgs>(args: SelectSubset<T, MascotasUpdateArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mascotas.
     * @param {MascotasDeleteManyArgs} args - Arguments to filter Mascotas to delete.
     * @example
     * // Delete a few Mascotas
     * const { count } = await prisma.mascotas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MascotasDeleteManyArgs>(args?: SelectSubset<T, MascotasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mascotas
     * const mascotas = await prisma.mascotas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MascotasUpdateManyArgs>(args: SelectSubset<T, MascotasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mascotas.
     * @param {MascotasUpsertArgs} args - Arguments to update or create a Mascotas.
     * @example
     * // Update or create a Mascotas
     * const mascotas = await prisma.mascotas.upsert({
     *   create: {
     *     // ... data to create a Mascotas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mascotas we want to update
     *   }
     * })
     */
    upsert<T extends MascotasUpsertArgs>(args: SelectSubset<T, MascotasUpsertArgs<ExtArgs>>): Prisma__MascotasClient<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasCountArgs} args - Arguments to filter Mascotas to count.
     * @example
     * // Count the number of Mascotas
     * const count = await prisma.mascotas.count({
     *   where: {
     *     // ... the filter for the Mascotas we want to count
     *   }
     * })
    **/
    count<T extends MascotasCountArgs>(
      args?: Subset<T, MascotasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MascotasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MascotasAggregateArgs>(args: Subset<T, MascotasAggregateArgs>): Prisma.PrismaPromise<GetMascotasAggregateType<T>>

    /**
     * Group by Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotasGroupByArgs} args - Group by arguments.
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
      T extends MascotasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MascotasGroupByArgs['orderBy'] }
        : { orderBy?: MascotasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MascotasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMascotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mascotas model
   */
  readonly fields: MascotasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mascotas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MascotasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    raza<T extends RazaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RazaDefaultArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriasDefaultArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genero<T extends GeneroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroDefaultArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mascotas model
   */
  interface MascotasFieldRefs {
    readonly id: FieldRef<"Mascotas", 'Int'>
    readonly nombre: FieldRef<"Mascotas", 'String'>
    readonly foto: FieldRef<"Mascotas", 'String'>
    readonly estado: FieldRef<"Mascotas", 'estado'>
    readonly usuarioId: FieldRef<"Mascotas", 'Int'>
    readonly razaId: FieldRef<"Mascotas", 'Int'>
    readonly categoriaId: FieldRef<"Mascotas", 'Int'>
    readonly generoId: FieldRef<"Mascotas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mascotas findUnique
   */
  export type MascotasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas findUniqueOrThrow
   */
  export type MascotasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas findFirst
   */
  export type MascotasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mascotas.
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mascotas.
     */
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Mascotas findFirstOrThrow
   */
  export type MascotasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mascotas.
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mascotas.
     */
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Mascotas findMany
   */
  export type MascotasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter, which Mascotas to fetch.
     */
    where?: MascotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mascotas to fetch.
     */
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mascotas.
     */
    cursor?: MascotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mascotas.
     */
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Mascotas create
   */
  export type MascotasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * The data needed to create a Mascotas.
     */
    data: XOR<MascotasCreateInput, MascotasUncheckedCreateInput>
  }

  /**
   * Mascotas createMany
   */
  export type MascotasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mascotas.
     */
    data: MascotasCreateManyInput | MascotasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mascotas update
   */
  export type MascotasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * The data needed to update a Mascotas.
     */
    data: XOR<MascotasUpdateInput, MascotasUncheckedUpdateInput>
    /**
     * Choose, which Mascotas to update.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas updateMany
   */
  export type MascotasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mascotas.
     */
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyInput>
    /**
     * Filter which Mascotas to update
     */
    where?: MascotasWhereInput
    /**
     * Limit how many Mascotas to update.
     */
    limit?: number
  }

  /**
   * Mascotas upsert
   */
  export type MascotasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * The filter to search for the Mascotas to update in case it exists.
     */
    where: MascotasWhereUniqueInput
    /**
     * In case the Mascotas found by the `where` argument doesn't exist, create a new Mascotas with this data.
     */
    create: XOR<MascotasCreateInput, MascotasUncheckedCreateInput>
    /**
     * In case the Mascotas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MascotasUpdateInput, MascotasUncheckedUpdateInput>
  }

  /**
   * Mascotas delete
   */
  export type MascotasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    /**
     * Filter which Mascotas to delete.
     */
    where: MascotasWhereUniqueInput
  }

  /**
   * Mascotas deleteMany
   */
  export type MascotasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mascotas to delete
     */
    where?: MascotasWhereInput
    /**
     * Limit how many Mascotas to delete.
     */
    limit?: number
  }

  /**
   * Mascotas without action
   */
  export type MascotasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
  }


  /**
   * Model Raza
   */

  export type AggregateRaza = {
    _count: RazaCountAggregateOutputType | null
    _avg: RazaAvgAggregateOutputType | null
    _sum: RazaSumAggregateOutputType | null
    _min: RazaMinAggregateOutputType | null
    _max: RazaMaxAggregateOutputType | null
  }

  export type RazaAvgAggregateOutputType = {
    id: number | null
  }

  export type RazaSumAggregateOutputType = {
    id: number | null
  }

  export type RazaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RazaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RazaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type RazaAvgAggregateInputType = {
    id?: true
  }

  export type RazaSumAggregateInputType = {
    id?: true
  }

  export type RazaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RazaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RazaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type RazaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raza to aggregate.
     */
    where?: RazaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazaOrderByWithRelationInput | RazaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RazaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Razas
    **/
    _count?: true | RazaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RazaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RazaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RazaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RazaMaxAggregateInputType
  }

  export type GetRazaAggregateType<T extends RazaAggregateArgs> = {
        [P in keyof T & keyof AggregateRaza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaza[P]>
      : GetScalarType<T[P], AggregateRaza[P]>
  }




  export type RazaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RazaWhereInput
    orderBy?: RazaOrderByWithAggregationInput | RazaOrderByWithAggregationInput[]
    by: RazaScalarFieldEnum[] | RazaScalarFieldEnum
    having?: RazaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RazaCountAggregateInputType | true
    _avg?: RazaAvgAggregateInputType
    _sum?: RazaSumAggregateInputType
    _min?: RazaMinAggregateInputType
    _max?: RazaMaxAggregateInputType
  }

  export type RazaGroupByOutputType = {
    id: number
    nombre: string
    _count: RazaCountAggregateOutputType | null
    _avg: RazaAvgAggregateOutputType | null
    _sum: RazaSumAggregateOutputType | null
    _min: RazaMinAggregateOutputType | null
    _max: RazaMaxAggregateOutputType | null
  }

  type GetRazaGroupByPayload<T extends RazaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RazaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RazaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RazaGroupByOutputType[P]>
            : GetScalarType<T[P], RazaGroupByOutputType[P]>
        }
      >
    >


  export type RazaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    mascota?: boolean | Raza$mascotaArgs<ExtArgs>
    _count?: boolean | RazaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raza"]>



  export type RazaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type RazaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["raza"]>
  export type RazaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | Raza$mascotaArgs<ExtArgs>
    _count?: boolean | RazaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RazaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Raza"
    objects: {
      mascota: Prisma.$MascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["raza"]>
    composites: {}
  }

  type RazaGetPayload<S extends boolean | null | undefined | RazaDefaultArgs> = $Result.GetResult<Prisma.$RazaPayload, S>

  type RazaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RazaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RazaCountAggregateInputType | true
    }

  export interface RazaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Raza'], meta: { name: 'Raza' } }
    /**
     * Find zero or one Raza that matches the filter.
     * @param {RazaFindUniqueArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RazaFindUniqueArgs>(args: SelectSubset<T, RazaFindUniqueArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RazaFindUniqueOrThrowArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RazaFindUniqueOrThrowArgs>(args: SelectSubset<T, RazaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaFindFirstArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RazaFindFirstArgs>(args?: SelectSubset<T, RazaFindFirstArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaFindFirstOrThrowArgs} args - Arguments to find a Raza
     * @example
     * // Get one Raza
     * const raza = await prisma.raza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RazaFindFirstOrThrowArgs>(args?: SelectSubset<T, RazaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Razas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Razas
     * const razas = await prisma.raza.findMany()
     * 
     * // Get first 10 Razas
     * const razas = await prisma.raza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const razaWithIdOnly = await prisma.raza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RazaFindManyArgs>(args?: SelectSubset<T, RazaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raza.
     * @param {RazaCreateArgs} args - Arguments to create a Raza.
     * @example
     * // Create one Raza
     * const Raza = await prisma.raza.create({
     *   data: {
     *     // ... data to create a Raza
     *   }
     * })
     * 
     */
    create<T extends RazaCreateArgs>(args: SelectSubset<T, RazaCreateArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Razas.
     * @param {RazaCreateManyArgs} args - Arguments to create many Razas.
     * @example
     * // Create many Razas
     * const raza = await prisma.raza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RazaCreateManyArgs>(args?: SelectSubset<T, RazaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Raza.
     * @param {RazaDeleteArgs} args - Arguments to delete one Raza.
     * @example
     * // Delete one Raza
     * const Raza = await prisma.raza.delete({
     *   where: {
     *     // ... filter to delete one Raza
     *   }
     * })
     * 
     */
    delete<T extends RazaDeleteArgs>(args: SelectSubset<T, RazaDeleteArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raza.
     * @param {RazaUpdateArgs} args - Arguments to update one Raza.
     * @example
     * // Update one Raza
     * const raza = await prisma.raza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RazaUpdateArgs>(args: SelectSubset<T, RazaUpdateArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Razas.
     * @param {RazaDeleteManyArgs} args - Arguments to filter Razas to delete.
     * @example
     * // Delete a few Razas
     * const { count } = await prisma.raza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RazaDeleteManyArgs>(args?: SelectSubset<T, RazaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Razas
     * const raza = await prisma.raza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RazaUpdateManyArgs>(args: SelectSubset<T, RazaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Raza.
     * @param {RazaUpsertArgs} args - Arguments to update or create a Raza.
     * @example
     * // Update or create a Raza
     * const raza = await prisma.raza.upsert({
     *   create: {
     *     // ... data to create a Raza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raza we want to update
     *   }
     * })
     */
    upsert<T extends RazaUpsertArgs>(args: SelectSubset<T, RazaUpsertArgs<ExtArgs>>): Prisma__RazaClient<$Result.GetResult<Prisma.$RazaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Razas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaCountArgs} args - Arguments to filter Razas to count.
     * @example
     * // Count the number of Razas
     * const count = await prisma.raza.count({
     *   where: {
     *     // ... the filter for the Razas we want to count
     *   }
     * })
    **/
    count<T extends RazaCountArgs>(
      args?: Subset<T, RazaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RazaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RazaAggregateArgs>(args: Subset<T, RazaAggregateArgs>): Prisma.PrismaPromise<GetRazaAggregateType<T>>

    /**
     * Group by Raza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazaGroupByArgs} args - Group by arguments.
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
      T extends RazaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RazaGroupByArgs['orderBy'] }
        : { orderBy?: RazaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RazaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRazaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Raza model
   */
  readonly fields: RazaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Raza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RazaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascota<T extends Raza$mascotaArgs<ExtArgs> = {}>(args?: Subset<T, Raza$mascotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Raza model
   */
  interface RazaFieldRefs {
    readonly id: FieldRef<"Raza", 'Int'>
    readonly nombre: FieldRef<"Raza", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Raza findUnique
   */
  export type RazaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * Filter, which Raza to fetch.
     */
    where: RazaWhereUniqueInput
  }

  /**
   * Raza findUniqueOrThrow
   */
  export type RazaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * Filter, which Raza to fetch.
     */
    where: RazaWhereUniqueInput
  }

  /**
   * Raza findFirst
   */
  export type RazaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * Filter, which Raza to fetch.
     */
    where?: RazaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazaOrderByWithRelationInput | RazaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Razas.
     */
    cursor?: RazaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Razas.
     */
    distinct?: RazaScalarFieldEnum | RazaScalarFieldEnum[]
  }

  /**
   * Raza findFirstOrThrow
   */
  export type RazaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * Filter, which Raza to fetch.
     */
    where?: RazaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazaOrderByWithRelationInput | RazaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Razas.
     */
    cursor?: RazaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Razas.
     */
    distinct?: RazaScalarFieldEnum | RazaScalarFieldEnum[]
  }

  /**
   * Raza findMany
   */
  export type RazaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * Filter, which Razas to fetch.
     */
    where?: RazaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Razas to fetch.
     */
    orderBy?: RazaOrderByWithRelationInput | RazaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Razas.
     */
    cursor?: RazaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Razas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Razas.
     */
    skip?: number
    distinct?: RazaScalarFieldEnum | RazaScalarFieldEnum[]
  }

  /**
   * Raza create
   */
  export type RazaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * The data needed to create a Raza.
     */
    data: XOR<RazaCreateInput, RazaUncheckedCreateInput>
  }

  /**
   * Raza createMany
   */
  export type RazaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Razas.
     */
    data: RazaCreateManyInput | RazaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Raza update
   */
  export type RazaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * The data needed to update a Raza.
     */
    data: XOR<RazaUpdateInput, RazaUncheckedUpdateInput>
    /**
     * Choose, which Raza to update.
     */
    where: RazaWhereUniqueInput
  }

  /**
   * Raza updateMany
   */
  export type RazaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Razas.
     */
    data: XOR<RazaUpdateManyMutationInput, RazaUncheckedUpdateManyInput>
    /**
     * Filter which Razas to update
     */
    where?: RazaWhereInput
    /**
     * Limit how many Razas to update.
     */
    limit?: number
  }

  /**
   * Raza upsert
   */
  export type RazaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * The filter to search for the Raza to update in case it exists.
     */
    where: RazaWhereUniqueInput
    /**
     * In case the Raza found by the `where` argument doesn't exist, create a new Raza with this data.
     */
    create: XOR<RazaCreateInput, RazaUncheckedCreateInput>
    /**
     * In case the Raza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RazaUpdateInput, RazaUncheckedUpdateInput>
  }

  /**
   * Raza delete
   */
  export type RazaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
    /**
     * Filter which Raza to delete.
     */
    where: RazaWhereUniqueInput
  }

  /**
   * Raza deleteMany
   */
  export type RazaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Razas to delete
     */
    where?: RazaWhereInput
    /**
     * Limit how many Razas to delete.
     */
    limit?: number
  }

  /**
   * Raza.mascota
   */
  export type Raza$mascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    cursor?: MascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Raza without action
   */
  export type RazaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raza
     */
    select?: RazaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raza
     */
    omit?: RazaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazaInclude<ExtArgs> | null
  }


  /**
   * Model Categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to aggregate.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type CategoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriasWhereInput
    orderBy?: CategoriasOrderByWithAggregationInput | CategoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: CategoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends CategoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type CategoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    mascota?: boolean | Categorias$mascotaArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>



  export type CategoriasSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categorias"]>
  export type CategoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | Categorias$mascotaArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorias"
    objects: {
      mascota: Prisma.$MascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type CategoriasGetPayload<S extends boolean | null | undefined | CategoriasDefaultArgs> = $Result.GetResult<Prisma.$CategoriasPayload, S>

  type CategoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface CategoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorias'], meta: { name: 'Categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {CategoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriasFindUniqueArgs>(args: SelectSubset<T, CategoriasFindUniqueArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriasFindFirstArgs>(args?: SelectSubset<T, CategoriasFindFirstArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriasFindManyArgs>(args?: SelectSubset<T, CategoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {CategoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends CategoriasCreateArgs>(args: SelectSubset<T, CategoriasCreateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriasCreateManyArgs>(args?: SelectSubset<T, CategoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {CategoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends CategoriasDeleteArgs>(args: SelectSubset<T, CategoriasDeleteArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {CategoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriasUpdateArgs>(args: SelectSubset<T, CategoriasUpdateArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriasDeleteManyArgs>(args?: SelectSubset<T, CategoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriasUpdateManyArgs>(args: SelectSubset<T, CategoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {CategoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends CategoriasUpsertArgs>(args: SelectSubset<T, CategoriasUpsertArgs<ExtArgs>>): Prisma__CategoriasClient<$Result.GetResult<Prisma.$CategoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriasCountArgs>(
      args?: Subset<T, CategoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasGroupByArgs} args - Group by arguments.
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
      T extends CategoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriasGroupByArgs['orderBy'] }
        : { orderBy?: CategoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorias model
   */
  readonly fields: CategoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascota<T extends Categorias$mascotaArgs<ExtArgs> = {}>(args?: Subset<T, Categorias$mascotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categorias model
   */
  interface CategoriasFieldRefs {
    readonly id: FieldRef<"Categorias", 'Int'>
    readonly nombre: FieldRef<"Categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorias findUnique
   */
  export type CategoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findUniqueOrThrow
   */
  export type CategoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias findFirst
   */
  export type CategoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findFirstOrThrow
   */
  export type CategoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias findMany
   */
  export type CategoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriasOrderByWithRelationInput | CategoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * Categorias create
   */
  export type CategoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorias.
     */
    data: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
  }

  /**
   * Categorias createMany
   */
  export type CategoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriasCreateManyInput | CategoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorias update
   */
  export type CategoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorias.
     */
    data: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
    /**
     * Choose, which Categorias to update.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias updateMany
   */
  export type CategoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriasUpdateManyMutationInput, CategoriasUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categorias upsert
   */
  export type CategoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorias to update in case it exists.
     */
    where: CategoriasWhereUniqueInput
    /**
     * In case the Categorias found by the `where` argument doesn't exist, create a new Categorias with this data.
     */
    create: XOR<CategoriasCreateInput, CategoriasUncheckedCreateInput>
    /**
     * In case the Categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriasUpdateInput, CategoriasUncheckedUpdateInput>
  }

  /**
   * Categorias delete
   */
  export type CategoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
    /**
     * Filter which Categorias to delete.
     */
    where: CategoriasWhereUniqueInput
  }

  /**
   * Categorias deleteMany
   */
  export type CategoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriasWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categorias.mascota
   */
  export type Categorias$mascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    cursor?: MascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Categorias without action
   */
  export type CategoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias
     */
    select?: CategoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorias
     */
    omit?: CategoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriasInclude<ExtArgs> | null
  }


  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id?: true
  }

  export type GeneroSumAggregateInputType = {
    id?: true
  }

  export type GeneroMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type GeneroMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type GeneroCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id: number
    nombre: string
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    mascota?: boolean | Genero$mascotaArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>



  export type GeneroSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | Genero$mascotaArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      mascota: Prisma.$MascotasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generoWithIdOnly = await prisma.genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
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
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascota<T extends Genero$mascotaArgs<ExtArgs> = {}>(args?: Subset<T, Genero$mascotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MascotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly id: FieldRef<"Genero", 'Int'>
    readonly nombre: FieldRef<"Genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.mascota
   */
  export type Genero$mascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mascotas
     */
    select?: MascotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mascotas
     */
    omit?: MascotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MascotasInclude<ExtArgs> | null
    where?: MascotasWhereInput
    orderBy?: MascotasOrderByWithRelationInput | MascotasOrderByWithRelationInput[]
    cursor?: MascotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MascotasScalarFieldEnum | MascotasScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
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


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const MascotasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    foto: 'foto',
    estado: 'estado',
    usuarioId: 'usuarioId',
    razaId: 'razaId',
    categoriaId: 'categoriaId',
    generoId: 'generoId'
  };

  export type MascotasScalarFieldEnum = (typeof MascotasScalarFieldEnum)[keyof typeof MascotasScalarFieldEnum]


  export const RazaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type RazaScalarFieldEnum = (typeof RazaScalarFieldEnum)[keyof typeof RazaScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuariosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    email: 'email',
    password: 'password'
  };

  export type UsuariosOrderByRelevanceFieldEnum = (typeof UsuariosOrderByRelevanceFieldEnum)[keyof typeof UsuariosOrderByRelevanceFieldEnum]


  export const MascotasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    foto: 'foto'
  };

  export type MascotasOrderByRelevanceFieldEnum = (typeof MascotasOrderByRelevanceFieldEnum)[keyof typeof MascotasOrderByRelevanceFieldEnum]


  export const RazaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type RazaOrderByRelevanceFieldEnum = (typeof RazaOrderByRelevanceFieldEnum)[keyof typeof RazaOrderByRelevanceFieldEnum]


  export const CategoriasOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type CategoriasOrderByRelevanceFieldEnum = (typeof CategoriasOrderByRelevanceFieldEnum)[keyof typeof CategoriasOrderByRelevanceFieldEnum]


  export const GeneroOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type GeneroOrderByRelevanceFieldEnum = (typeof GeneroOrderByRelevanceFieldEnum)[keyof typeof GeneroOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'estado'
   */
  export type EnumestadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: IntFilter<"Usuarios"> | number
    nombre?: StringFilter<"Usuarios"> | string
    email?: StringFilter<"Usuarios"> | string
    password?: StringFilter<"Usuarios"> | string
    mascotas?: MascotasListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mascotas?: MascotasOrderByRelationAggregateInput
    _relevance?: UsuariosOrderByRelevanceInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    nombre?: StringFilter<"Usuarios"> | string
    password?: StringFilter<"Usuarios"> | string
    mascotas?: MascotasListRelationFilter
  }, "id" | "email">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuarios"> | number
    nombre?: StringWithAggregatesFilter<"Usuarios"> | string
    email?: StringWithAggregatesFilter<"Usuarios"> | string
    password?: StringWithAggregatesFilter<"Usuarios"> | string
  }

  export type MascotasWhereInput = {
    AND?: MascotasWhereInput | MascotasWhereInput[]
    OR?: MascotasWhereInput[]
    NOT?: MascotasWhereInput | MascotasWhereInput[]
    id?: IntFilter<"Mascotas"> | number
    nombre?: StringFilter<"Mascotas"> | string
    foto?: StringFilter<"Mascotas"> | string
    estado?: EnumestadoFilter<"Mascotas"> | $Enums.estado
    usuarioId?: IntFilter<"Mascotas"> | number
    razaId?: IntFilter<"Mascotas"> | number
    categoriaId?: IntFilter<"Mascotas"> | number
    generoId?: IntFilter<"Mascotas"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    raza?: XOR<RazaScalarRelationFilter, RazaWhereInput>
    categoria?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }

  export type MascotasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    foto?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    razaId?: SortOrder
    categoriaId?: SortOrder
    generoId?: SortOrder
    usuario?: UsuariosOrderByWithRelationInput
    raza?: RazaOrderByWithRelationInput
    categoria?: CategoriasOrderByWithRelationInput
    genero?: GeneroOrderByWithRelationInput
    _relevance?: MascotasOrderByRelevanceInput
  }

  export type MascotasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MascotasWhereInput | MascotasWhereInput[]
    OR?: MascotasWhereInput[]
    NOT?: MascotasWhereInput | MascotasWhereInput[]
    nombre?: StringFilter<"Mascotas"> | string
    foto?: StringFilter<"Mascotas"> | string
    estado?: EnumestadoFilter<"Mascotas"> | $Enums.estado
    usuarioId?: IntFilter<"Mascotas"> | number
    razaId?: IntFilter<"Mascotas"> | number
    categoriaId?: IntFilter<"Mascotas"> | number
    generoId?: IntFilter<"Mascotas"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    raza?: XOR<RazaScalarRelationFilter, RazaWhereInput>
    categoria?: XOR<CategoriasScalarRelationFilter, CategoriasWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }, "id">

  export type MascotasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    foto?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    razaId?: SortOrder
    categoriaId?: SortOrder
    generoId?: SortOrder
    _count?: MascotasCountOrderByAggregateInput
    _avg?: MascotasAvgOrderByAggregateInput
    _max?: MascotasMaxOrderByAggregateInput
    _min?: MascotasMinOrderByAggregateInput
    _sum?: MascotasSumOrderByAggregateInput
  }

  export type MascotasScalarWhereWithAggregatesInput = {
    AND?: MascotasScalarWhereWithAggregatesInput | MascotasScalarWhereWithAggregatesInput[]
    OR?: MascotasScalarWhereWithAggregatesInput[]
    NOT?: MascotasScalarWhereWithAggregatesInput | MascotasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mascotas"> | number
    nombre?: StringWithAggregatesFilter<"Mascotas"> | string
    foto?: StringWithAggregatesFilter<"Mascotas"> | string
    estado?: EnumestadoWithAggregatesFilter<"Mascotas"> | $Enums.estado
    usuarioId?: IntWithAggregatesFilter<"Mascotas"> | number
    razaId?: IntWithAggregatesFilter<"Mascotas"> | number
    categoriaId?: IntWithAggregatesFilter<"Mascotas"> | number
    generoId?: IntWithAggregatesFilter<"Mascotas"> | number
  }

  export type RazaWhereInput = {
    AND?: RazaWhereInput | RazaWhereInput[]
    OR?: RazaWhereInput[]
    NOT?: RazaWhereInput | RazaWhereInput[]
    id?: IntFilter<"Raza"> | number
    nombre?: StringFilter<"Raza"> | string
    mascota?: MascotasListRelationFilter
  }

  export type RazaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    mascota?: MascotasOrderByRelationAggregateInput
    _relevance?: RazaOrderByRelevanceInput
  }

  export type RazaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RazaWhereInput | RazaWhereInput[]
    OR?: RazaWhereInput[]
    NOT?: RazaWhereInput | RazaWhereInput[]
    nombre?: StringFilter<"Raza"> | string
    mascota?: MascotasListRelationFilter
  }, "id">

  export type RazaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: RazaCountOrderByAggregateInput
    _avg?: RazaAvgOrderByAggregateInput
    _max?: RazaMaxOrderByAggregateInput
    _min?: RazaMinOrderByAggregateInput
    _sum?: RazaSumOrderByAggregateInput
  }

  export type RazaScalarWhereWithAggregatesInput = {
    AND?: RazaScalarWhereWithAggregatesInput | RazaScalarWhereWithAggregatesInput[]
    OR?: RazaScalarWhereWithAggregatesInput[]
    NOT?: RazaScalarWhereWithAggregatesInput | RazaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Raza"> | number
    nombre?: StringWithAggregatesFilter<"Raza"> | string
  }

  export type CategoriasWhereInput = {
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    id?: IntFilter<"Categorias"> | number
    nombre?: StringFilter<"Categorias"> | string
    mascota?: MascotasListRelationFilter
  }

  export type CategoriasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    mascota?: MascotasOrderByRelationAggregateInput
    _relevance?: CategoriasOrderByRelevanceInput
  }

  export type CategoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriasWhereInput | CategoriasWhereInput[]
    OR?: CategoriasWhereInput[]
    NOT?: CategoriasWhereInput | CategoriasWhereInput[]
    nombre?: StringFilter<"Categorias"> | string
    mascota?: MascotasListRelationFilter
  }, "id">

  export type CategoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriasCountOrderByAggregateInput
    _avg?: CategoriasAvgOrderByAggregateInput
    _max?: CategoriasMaxOrderByAggregateInput
    _min?: CategoriasMinOrderByAggregateInput
    _sum?: CategoriasSumOrderByAggregateInput
  }

  export type CategoriasScalarWhereWithAggregatesInput = {
    AND?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    OR?: CategoriasScalarWhereWithAggregatesInput[]
    NOT?: CategoriasScalarWhereWithAggregatesInput | CategoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categorias"> | number
    nombre?: StringWithAggregatesFilter<"Categorias"> | string
  }

  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    id?: IntFilter<"Genero"> | number
    nombre?: StringFilter<"Genero"> | string
    mascota?: MascotasListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    mascota?: MascotasOrderByRelationAggregateInput
    _relevance?: GeneroOrderByRelevanceInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    nombre?: StringFilter<"Genero"> | string
    mascota?: MascotasListRelationFilter
  }, "id">

  export type GeneroOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _avg?: GeneroAvgOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
    _sum?: GeneroSumOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genero"> | number
    nombre?: StringWithAggregatesFilter<"Genero"> | string
  }

  export type UsuariosCreateInput = {
    nombre: string
    email: string
    password: string
    mascotas?: MascotasCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password: string
    mascotas?: MascotasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mascotas?: MascotasUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mascotas?: MascotasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuariosCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password: string
  }

  export type UsuariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type MascotasCreateInput = {
    nombre: string
    foto: string
    estado: $Enums.estado
    usuario: UsuariosCreateNestedOneWithoutMascotasInput
    raza: RazaCreateNestedOneWithoutMascotaInput
    categoria: CategoriasCreateNestedOneWithoutMascotaInput
    genero: GeneroCreateNestedOneWithoutMascotaInput
  }

  export type MascotasUncheckedCreateInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    razaId: number
    categoriaId: number
    generoId: number
  }

  export type MascotasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuario?: UsuariosUpdateOneRequiredWithoutMascotasNestedInput
    raza?: RazaUpdateOneRequiredWithoutMascotaNestedInput
    categoria?: CategoriasUpdateOneRequiredWithoutMascotaNestedInput
    genero?: GeneroUpdateOneRequiredWithoutMascotaNestedInput
  }

  export type MascotasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    razaId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasCreateManyInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    razaId: number
    categoriaId: number
    generoId: number
  }

  export type MascotasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
  }

  export type MascotasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    razaId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type RazaCreateInput = {
    nombre: string
    mascota?: MascotasCreateNestedManyWithoutRazaInput
  }

  export type RazaUncheckedCreateInput = {
    id?: number
    nombre: string
    mascota?: MascotasUncheckedCreateNestedManyWithoutRazaInput
  }

  export type RazaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    mascota?: MascotasUpdateManyWithoutRazaNestedInput
  }

  export type RazaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    mascota?: MascotasUncheckedUpdateManyWithoutRazaNestedInput
  }

  export type RazaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type RazaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RazaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasCreateInput = {
    nombre: string
    mascota?: MascotasCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriasUncheckedCreateInput = {
    id?: number
    nombre: string
    mascota?: MascotasUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    mascota?: MascotasUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    mascota?: MascotasUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriasCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroCreateInput = {
    nombre: string
    mascota?: MascotasCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateInput = {
    id?: number
    nombre: string
    mascota?: MascotasUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    mascota?: MascotasUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    mascota?: MascotasUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroCreateManyInput = {
    id?: number
    nombre: string
  }

  export type GeneroUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MascotasListRelationFilter = {
    every?: MascotasWhereInput
    some?: MascotasWhereInput
    none?: MascotasWhereInput
  }

  export type MascotasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosOrderByRelevanceInput = {
    fields: UsuariosOrderByRelevanceFieldEnum | UsuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumestadoFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[]
    notIn?: $Enums.estado[]
    not?: NestedEnumestadoFilter<$PrismaModel> | $Enums.estado
  }

  export type UsuariosScalarRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type RazaScalarRelationFilter = {
    is?: RazaWhereInput
    isNot?: RazaWhereInput
  }

  export type CategoriasScalarRelationFilter = {
    is?: CategoriasWhereInput
    isNot?: CategoriasWhereInput
  }

  export type GeneroScalarRelationFilter = {
    is?: GeneroWhereInput
    isNot?: GeneroWhereInput
  }

  export type MascotasOrderByRelevanceInput = {
    fields: MascotasOrderByRelevanceFieldEnum | MascotasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MascotasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    foto?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    razaId?: SortOrder
    categoriaId?: SortOrder
    generoId?: SortOrder
  }

  export type MascotasAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    razaId?: SortOrder
    categoriaId?: SortOrder
    generoId?: SortOrder
  }

  export type MascotasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    foto?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    razaId?: SortOrder
    categoriaId?: SortOrder
    generoId?: SortOrder
  }

  export type MascotasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    foto?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    razaId?: SortOrder
    categoriaId?: SortOrder
    generoId?: SortOrder
  }

  export type MascotasSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    razaId?: SortOrder
    categoriaId?: SortOrder
    generoId?: SortOrder
  }

  export type EnumestadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[]
    notIn?: $Enums.estado[]
    not?: NestedEnumestadoWithAggregatesFilter<$PrismaModel> | $Enums.estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestadoFilter<$PrismaModel>
    _max?: NestedEnumestadoFilter<$PrismaModel>
  }

  export type RazaOrderByRelevanceInput = {
    fields: RazaOrderByRelevanceFieldEnum | RazaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RazaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RazaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RazaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RazaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RazaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriasOrderByRelevanceInput = {
    fields: CategoriasOrderByRelevanceFieldEnum | CategoriasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneroOrderByRelevanceInput = {
    fields: GeneroOrderByRelevanceFieldEnum | GeneroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GeneroCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type GeneroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type GeneroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MascotasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MascotasCreateWithoutUsuarioInput, MascotasUncheckedCreateWithoutUsuarioInput> | MascotasCreateWithoutUsuarioInput[] | MascotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutUsuarioInput | MascotasCreateOrConnectWithoutUsuarioInput[]
    createMany?: MascotasCreateManyUsuarioInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<MascotasCreateWithoutUsuarioInput, MascotasUncheckedCreateWithoutUsuarioInput> | MascotasCreateWithoutUsuarioInput[] | MascotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutUsuarioInput | MascotasCreateOrConnectWithoutUsuarioInput[]
    createMany?: MascotasCreateManyUsuarioInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MascotasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MascotasCreateWithoutUsuarioInput, MascotasUncheckedCreateWithoutUsuarioInput> | MascotasCreateWithoutUsuarioInput[] | MascotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutUsuarioInput | MascotasCreateOrConnectWithoutUsuarioInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutUsuarioInput | MascotasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MascotasCreateManyUsuarioInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutUsuarioInput | MascotasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutUsuarioInput | MascotasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MascotasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<MascotasCreateWithoutUsuarioInput, MascotasUncheckedCreateWithoutUsuarioInput> | MascotasCreateWithoutUsuarioInput[] | MascotasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutUsuarioInput | MascotasCreateOrConnectWithoutUsuarioInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutUsuarioInput | MascotasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: MascotasCreateManyUsuarioInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutUsuarioInput | MascotasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutUsuarioInput | MascotasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutMascotasInput = {
    create?: XOR<UsuariosCreateWithoutMascotasInput, UsuariosUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutMascotasInput
    connect?: UsuariosWhereUniqueInput
  }

  export type RazaCreateNestedOneWithoutMascotaInput = {
    create?: XOR<RazaCreateWithoutMascotaInput, RazaUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: RazaCreateOrConnectWithoutMascotaInput
    connect?: RazaWhereUniqueInput
  }

  export type CategoriasCreateNestedOneWithoutMascotaInput = {
    create?: XOR<CategoriasCreateWithoutMascotaInput, CategoriasUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutMascotaInput
    connect?: CategoriasWhereUniqueInput
  }

  export type GeneroCreateNestedOneWithoutMascotaInput = {
    create?: XOR<GeneroCreateWithoutMascotaInput, GeneroUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutMascotaInput
    connect?: GeneroWhereUniqueInput
  }

  export type EnumestadoFieldUpdateOperationsInput = {
    set?: $Enums.estado
  }

  export type UsuariosUpdateOneRequiredWithoutMascotasNestedInput = {
    create?: XOR<UsuariosCreateWithoutMascotasInput, UsuariosUncheckedCreateWithoutMascotasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutMascotasInput
    upsert?: UsuariosUpsertWithoutMascotasInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutMascotasInput, UsuariosUpdateWithoutMascotasInput>, UsuariosUncheckedUpdateWithoutMascotasInput>
  }

  export type RazaUpdateOneRequiredWithoutMascotaNestedInput = {
    create?: XOR<RazaCreateWithoutMascotaInput, RazaUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: RazaCreateOrConnectWithoutMascotaInput
    upsert?: RazaUpsertWithoutMascotaInput
    connect?: RazaWhereUniqueInput
    update?: XOR<XOR<RazaUpdateToOneWithWhereWithoutMascotaInput, RazaUpdateWithoutMascotaInput>, RazaUncheckedUpdateWithoutMascotaInput>
  }

  export type CategoriasUpdateOneRequiredWithoutMascotaNestedInput = {
    create?: XOR<CategoriasCreateWithoutMascotaInput, CategoriasUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: CategoriasCreateOrConnectWithoutMascotaInput
    upsert?: CategoriasUpsertWithoutMascotaInput
    connect?: CategoriasWhereUniqueInput
    update?: XOR<XOR<CategoriasUpdateToOneWithWhereWithoutMascotaInput, CategoriasUpdateWithoutMascotaInput>, CategoriasUncheckedUpdateWithoutMascotaInput>
  }

  export type GeneroUpdateOneRequiredWithoutMascotaNestedInput = {
    create?: XOR<GeneroCreateWithoutMascotaInput, GeneroUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutMascotaInput
    upsert?: GeneroUpsertWithoutMascotaInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutMascotaInput, GeneroUpdateWithoutMascotaInput>, GeneroUncheckedUpdateWithoutMascotaInput>
  }

  export type MascotasCreateNestedManyWithoutRazaInput = {
    create?: XOR<MascotasCreateWithoutRazaInput, MascotasUncheckedCreateWithoutRazaInput> | MascotasCreateWithoutRazaInput[] | MascotasUncheckedCreateWithoutRazaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazaInput | MascotasCreateOrConnectWithoutRazaInput[]
    createMany?: MascotasCreateManyRazaInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUncheckedCreateNestedManyWithoutRazaInput = {
    create?: XOR<MascotasCreateWithoutRazaInput, MascotasUncheckedCreateWithoutRazaInput> | MascotasCreateWithoutRazaInput[] | MascotasUncheckedCreateWithoutRazaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazaInput | MascotasCreateOrConnectWithoutRazaInput[]
    createMany?: MascotasCreateManyRazaInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUpdateManyWithoutRazaNestedInput = {
    create?: XOR<MascotasCreateWithoutRazaInput, MascotasUncheckedCreateWithoutRazaInput> | MascotasCreateWithoutRazaInput[] | MascotasUncheckedCreateWithoutRazaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazaInput | MascotasCreateOrConnectWithoutRazaInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutRazaInput | MascotasUpsertWithWhereUniqueWithoutRazaInput[]
    createMany?: MascotasCreateManyRazaInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutRazaInput | MascotasUpdateWithWhereUniqueWithoutRazaInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutRazaInput | MascotasUpdateManyWithWhereWithoutRazaInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasUncheckedUpdateManyWithoutRazaNestedInput = {
    create?: XOR<MascotasCreateWithoutRazaInput, MascotasUncheckedCreateWithoutRazaInput> | MascotasCreateWithoutRazaInput[] | MascotasUncheckedCreateWithoutRazaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutRazaInput | MascotasCreateOrConnectWithoutRazaInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutRazaInput | MascotasUpsertWithWhereUniqueWithoutRazaInput[]
    createMany?: MascotasCreateManyRazaInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutRazaInput | MascotasUpdateWithWhereUniqueWithoutRazaInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutRazaInput | MascotasUpdateManyWithWhereWithoutRazaInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<MascotasCreateWithoutCategoriaInput, MascotasUncheckedCreateWithoutCategoriaInput> | MascotasCreateWithoutCategoriaInput[] | MascotasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriaInput | MascotasCreateOrConnectWithoutCategoriaInput[]
    createMany?: MascotasCreateManyCategoriaInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<MascotasCreateWithoutCategoriaInput, MascotasUncheckedCreateWithoutCategoriaInput> | MascotasCreateWithoutCategoriaInput[] | MascotasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriaInput | MascotasCreateOrConnectWithoutCategoriaInput[]
    createMany?: MascotasCreateManyCategoriaInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<MascotasCreateWithoutCategoriaInput, MascotasUncheckedCreateWithoutCategoriaInput> | MascotasCreateWithoutCategoriaInput[] | MascotasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriaInput | MascotasCreateOrConnectWithoutCategoriaInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutCategoriaInput | MascotasUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: MascotasCreateManyCategoriaInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutCategoriaInput | MascotasUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutCategoriaInput | MascotasUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<MascotasCreateWithoutCategoriaInput, MascotasUncheckedCreateWithoutCategoriaInput> | MascotasCreateWithoutCategoriaInput[] | MascotasUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutCategoriaInput | MascotasCreateOrConnectWithoutCategoriaInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutCategoriaInput | MascotasUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: MascotasCreateManyCategoriaInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutCategoriaInput | MascotasUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutCategoriaInput | MascotasUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasCreateNestedManyWithoutGeneroInput = {
    create?: XOR<MascotasCreateWithoutGeneroInput, MascotasUncheckedCreateWithoutGeneroInput> | MascotasCreateWithoutGeneroInput[] | MascotasUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroInput | MascotasCreateOrConnectWithoutGeneroInput[]
    createMany?: MascotasCreateManyGeneroInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<MascotasCreateWithoutGeneroInput, MascotasUncheckedCreateWithoutGeneroInput> | MascotasCreateWithoutGeneroInput[] | MascotasUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroInput | MascotasCreateOrConnectWithoutGeneroInput[]
    createMany?: MascotasCreateManyGeneroInputEnvelope
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
  }

  export type MascotasUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<MascotasCreateWithoutGeneroInput, MascotasUncheckedCreateWithoutGeneroInput> | MascotasCreateWithoutGeneroInput[] | MascotasUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroInput | MascotasCreateOrConnectWithoutGeneroInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutGeneroInput | MascotasUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: MascotasCreateManyGeneroInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutGeneroInput | MascotasUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutGeneroInput | MascotasUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type MascotasUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<MascotasCreateWithoutGeneroInput, MascotasUncheckedCreateWithoutGeneroInput> | MascotasCreateWithoutGeneroInput[] | MascotasUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: MascotasCreateOrConnectWithoutGeneroInput | MascotasCreateOrConnectWithoutGeneroInput[]
    upsert?: MascotasUpsertWithWhereUniqueWithoutGeneroInput | MascotasUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: MascotasCreateManyGeneroInputEnvelope
    set?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    disconnect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    delete?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    connect?: MascotasWhereUniqueInput | MascotasWhereUniqueInput[]
    update?: MascotasUpdateWithWhereUniqueWithoutGeneroInput | MascotasUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: MascotasUpdateManyWithWhereWithoutGeneroInput | MascotasUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumestadoFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[]
    notIn?: $Enums.estado[]
    not?: NestedEnumestadoFilter<$PrismaModel> | $Enums.estado
  }

  export type NestedEnumestadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[]
    notIn?: $Enums.estado[]
    not?: NestedEnumestadoWithAggregatesFilter<$PrismaModel> | $Enums.estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestadoFilter<$PrismaModel>
    _max?: NestedEnumestadoFilter<$PrismaModel>
  }

  export type MascotasCreateWithoutUsuarioInput = {
    nombre: string
    foto: string
    estado: $Enums.estado
    raza: RazaCreateNestedOneWithoutMascotaInput
    categoria: CategoriasCreateNestedOneWithoutMascotaInput
    genero: GeneroCreateNestedOneWithoutMascotaInput
  }

  export type MascotasUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    razaId: number
    categoriaId: number
    generoId: number
  }

  export type MascotasCreateOrConnectWithoutUsuarioInput = {
    where: MascotasWhereUniqueInput
    create: XOR<MascotasCreateWithoutUsuarioInput, MascotasUncheckedCreateWithoutUsuarioInput>
  }

  export type MascotasCreateManyUsuarioInputEnvelope = {
    data: MascotasCreateManyUsuarioInput | MascotasCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type MascotasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MascotasWhereUniqueInput
    update: XOR<MascotasUpdateWithoutUsuarioInput, MascotasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MascotasCreateWithoutUsuarioInput, MascotasUncheckedCreateWithoutUsuarioInput>
  }

  export type MascotasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MascotasWhereUniqueInput
    data: XOR<MascotasUpdateWithoutUsuarioInput, MascotasUncheckedUpdateWithoutUsuarioInput>
  }

  export type MascotasUpdateManyWithWhereWithoutUsuarioInput = {
    where: MascotasScalarWhereInput
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type MascotasScalarWhereInput = {
    AND?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
    OR?: MascotasScalarWhereInput[]
    NOT?: MascotasScalarWhereInput | MascotasScalarWhereInput[]
    id?: IntFilter<"Mascotas"> | number
    nombre?: StringFilter<"Mascotas"> | string
    foto?: StringFilter<"Mascotas"> | string
    estado?: EnumestadoFilter<"Mascotas"> | $Enums.estado
    usuarioId?: IntFilter<"Mascotas"> | number
    razaId?: IntFilter<"Mascotas"> | number
    categoriaId?: IntFilter<"Mascotas"> | number
    generoId?: IntFilter<"Mascotas"> | number
  }

  export type UsuariosCreateWithoutMascotasInput = {
    nombre: string
    email: string
    password: string
  }

  export type UsuariosUncheckedCreateWithoutMascotasInput = {
    id?: number
    nombre: string
    email: string
    password: string
  }

  export type UsuariosCreateOrConnectWithoutMascotasInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutMascotasInput, UsuariosUncheckedCreateWithoutMascotasInput>
  }

  export type RazaCreateWithoutMascotaInput = {
    nombre: string
  }

  export type RazaUncheckedCreateWithoutMascotaInput = {
    id?: number
    nombre: string
  }

  export type RazaCreateOrConnectWithoutMascotaInput = {
    where: RazaWhereUniqueInput
    create: XOR<RazaCreateWithoutMascotaInput, RazaUncheckedCreateWithoutMascotaInput>
  }

  export type CategoriasCreateWithoutMascotaInput = {
    nombre: string
  }

  export type CategoriasUncheckedCreateWithoutMascotaInput = {
    id?: number
    nombre: string
  }

  export type CategoriasCreateOrConnectWithoutMascotaInput = {
    where: CategoriasWhereUniqueInput
    create: XOR<CategoriasCreateWithoutMascotaInput, CategoriasUncheckedCreateWithoutMascotaInput>
  }

  export type GeneroCreateWithoutMascotaInput = {
    nombre: string
  }

  export type GeneroUncheckedCreateWithoutMascotaInput = {
    id?: number
    nombre: string
  }

  export type GeneroCreateOrConnectWithoutMascotaInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutMascotaInput, GeneroUncheckedCreateWithoutMascotaInput>
  }

  export type UsuariosUpsertWithoutMascotasInput = {
    update: XOR<UsuariosUpdateWithoutMascotasInput, UsuariosUncheckedUpdateWithoutMascotasInput>
    create: XOR<UsuariosCreateWithoutMascotasInput, UsuariosUncheckedCreateWithoutMascotasInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutMascotasInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutMascotasInput, UsuariosUncheckedUpdateWithoutMascotasInput>
  }

  export type UsuariosUpdateWithoutMascotasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosUncheckedUpdateWithoutMascotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RazaUpsertWithoutMascotaInput = {
    update: XOR<RazaUpdateWithoutMascotaInput, RazaUncheckedUpdateWithoutMascotaInput>
    create: XOR<RazaCreateWithoutMascotaInput, RazaUncheckedCreateWithoutMascotaInput>
    where?: RazaWhereInput
  }

  export type RazaUpdateToOneWithWhereWithoutMascotaInput = {
    where?: RazaWhereInput
    data: XOR<RazaUpdateWithoutMascotaInput, RazaUncheckedUpdateWithoutMascotaInput>
  }

  export type RazaUpdateWithoutMascotaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RazaUncheckedUpdateWithoutMascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUpsertWithoutMascotaInput = {
    update: XOR<CategoriasUpdateWithoutMascotaInput, CategoriasUncheckedUpdateWithoutMascotaInput>
    create: XOR<CategoriasCreateWithoutMascotaInput, CategoriasUncheckedCreateWithoutMascotaInput>
    where?: CategoriasWhereInput
  }

  export type CategoriasUpdateToOneWithWhereWithoutMascotaInput = {
    where?: CategoriasWhereInput
    data: XOR<CategoriasUpdateWithoutMascotaInput, CategoriasUncheckedUpdateWithoutMascotaInput>
  }

  export type CategoriasUpdateWithoutMascotaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriasUncheckedUpdateWithoutMascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUpsertWithoutMascotaInput = {
    update: XOR<GeneroUpdateWithoutMascotaInput, GeneroUncheckedUpdateWithoutMascotaInput>
    create: XOR<GeneroCreateWithoutMascotaInput, GeneroUncheckedCreateWithoutMascotaInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutMascotaInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutMascotaInput, GeneroUncheckedUpdateWithoutMascotaInput>
  }

  export type GeneroUpdateWithoutMascotaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateWithoutMascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MascotasCreateWithoutRazaInput = {
    nombre: string
    foto: string
    estado: $Enums.estado
    usuario: UsuariosCreateNestedOneWithoutMascotasInput
    categoria: CategoriasCreateNestedOneWithoutMascotaInput
    genero: GeneroCreateNestedOneWithoutMascotaInput
  }

  export type MascotasUncheckedCreateWithoutRazaInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    categoriaId: number
    generoId: number
  }

  export type MascotasCreateOrConnectWithoutRazaInput = {
    where: MascotasWhereUniqueInput
    create: XOR<MascotasCreateWithoutRazaInput, MascotasUncheckedCreateWithoutRazaInput>
  }

  export type MascotasCreateManyRazaInputEnvelope = {
    data: MascotasCreateManyRazaInput | MascotasCreateManyRazaInput[]
    skipDuplicates?: boolean
  }

  export type MascotasUpsertWithWhereUniqueWithoutRazaInput = {
    where: MascotasWhereUniqueInput
    update: XOR<MascotasUpdateWithoutRazaInput, MascotasUncheckedUpdateWithoutRazaInput>
    create: XOR<MascotasCreateWithoutRazaInput, MascotasUncheckedCreateWithoutRazaInput>
  }

  export type MascotasUpdateWithWhereUniqueWithoutRazaInput = {
    where: MascotasWhereUniqueInput
    data: XOR<MascotasUpdateWithoutRazaInput, MascotasUncheckedUpdateWithoutRazaInput>
  }

  export type MascotasUpdateManyWithWhereWithoutRazaInput = {
    where: MascotasScalarWhereInput
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyWithoutRazaInput>
  }

  export type MascotasCreateWithoutCategoriaInput = {
    nombre: string
    foto: string
    estado: $Enums.estado
    usuario: UsuariosCreateNestedOneWithoutMascotasInput
    raza: RazaCreateNestedOneWithoutMascotaInput
    genero: GeneroCreateNestedOneWithoutMascotaInput
  }

  export type MascotasUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    razaId: number
    generoId: number
  }

  export type MascotasCreateOrConnectWithoutCategoriaInput = {
    where: MascotasWhereUniqueInput
    create: XOR<MascotasCreateWithoutCategoriaInput, MascotasUncheckedCreateWithoutCategoriaInput>
  }

  export type MascotasCreateManyCategoriaInputEnvelope = {
    data: MascotasCreateManyCategoriaInput | MascotasCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type MascotasUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: MascotasWhereUniqueInput
    update: XOR<MascotasUpdateWithoutCategoriaInput, MascotasUncheckedUpdateWithoutCategoriaInput>
    create: XOR<MascotasCreateWithoutCategoriaInput, MascotasUncheckedCreateWithoutCategoriaInput>
  }

  export type MascotasUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: MascotasWhereUniqueInput
    data: XOR<MascotasUpdateWithoutCategoriaInput, MascotasUncheckedUpdateWithoutCategoriaInput>
  }

  export type MascotasUpdateManyWithWhereWithoutCategoriaInput = {
    where: MascotasScalarWhereInput
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type MascotasCreateWithoutGeneroInput = {
    nombre: string
    foto: string
    estado: $Enums.estado
    usuario: UsuariosCreateNestedOneWithoutMascotasInput
    raza: RazaCreateNestedOneWithoutMascotaInput
    categoria: CategoriasCreateNestedOneWithoutMascotaInput
  }

  export type MascotasUncheckedCreateWithoutGeneroInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    razaId: number
    categoriaId: number
  }

  export type MascotasCreateOrConnectWithoutGeneroInput = {
    where: MascotasWhereUniqueInput
    create: XOR<MascotasCreateWithoutGeneroInput, MascotasUncheckedCreateWithoutGeneroInput>
  }

  export type MascotasCreateManyGeneroInputEnvelope = {
    data: MascotasCreateManyGeneroInput | MascotasCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type MascotasUpsertWithWhereUniqueWithoutGeneroInput = {
    where: MascotasWhereUniqueInput
    update: XOR<MascotasUpdateWithoutGeneroInput, MascotasUncheckedUpdateWithoutGeneroInput>
    create: XOR<MascotasCreateWithoutGeneroInput, MascotasUncheckedCreateWithoutGeneroInput>
  }

  export type MascotasUpdateWithWhereUniqueWithoutGeneroInput = {
    where: MascotasWhereUniqueInput
    data: XOR<MascotasUpdateWithoutGeneroInput, MascotasUncheckedUpdateWithoutGeneroInput>
  }

  export type MascotasUpdateManyWithWhereWithoutGeneroInput = {
    where: MascotasScalarWhereInput
    data: XOR<MascotasUpdateManyMutationInput, MascotasUncheckedUpdateManyWithoutGeneroInput>
  }

  export type MascotasCreateManyUsuarioInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    razaId: number
    categoriaId: number
    generoId: number
  }

  export type MascotasUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    raza?: RazaUpdateOneRequiredWithoutMascotaNestedInput
    categoria?: CategoriasUpdateOneRequiredWithoutMascotaNestedInput
    genero?: GeneroUpdateOneRequiredWithoutMascotaNestedInput
  }

  export type MascotasUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    razaId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    razaId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasCreateManyRazaInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    categoriaId: number
    generoId: number
  }

  export type MascotasUpdateWithoutRazaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuario?: UsuariosUpdateOneRequiredWithoutMascotasNestedInput
    categoria?: CategoriasUpdateOneRequiredWithoutMascotaNestedInput
    genero?: GeneroUpdateOneRequiredWithoutMascotaNestedInput
  }

  export type MascotasUncheckedUpdateWithoutRazaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasUncheckedUpdateManyWithoutRazaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasCreateManyCategoriaInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    razaId: number
    generoId: number
  }

  export type MascotasUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuario?: UsuariosUpdateOneRequiredWithoutMascotasNestedInput
    raza?: RazaUpdateOneRequiredWithoutMascotaNestedInput
    genero?: GeneroUpdateOneRequiredWithoutMascotaNestedInput
  }

  export type MascotasUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    razaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    razaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasCreateManyGeneroInput = {
    id?: number
    nombre: string
    foto: string
    estado: $Enums.estado
    usuarioId: number
    razaId: number
    categoriaId: number
  }

  export type MascotasUpdateWithoutGeneroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuario?: UsuariosUpdateOneRequiredWithoutMascotasNestedInput
    raza?: RazaUpdateOneRequiredWithoutMascotaNestedInput
    categoria?: CategoriasUpdateOneRequiredWithoutMascotaNestedInput
  }

  export type MascotasUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    razaId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type MascotasUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    usuarioId?: IntFieldUpdateOperationsInput | number
    razaId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
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