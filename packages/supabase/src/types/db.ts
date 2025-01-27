export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      access_requests: {
        Row: {
          company_document: string
          company_name: string
          company_type: string
          created_at: string
          employee_count: number
          id: string
          observations: string | null
          responsible_email: string
          responsible_name: string
          responsible_phone: string
        }
        Insert: {
          company_document: string
          company_name: string
          company_type?: string
          created_at?: string
          employee_count: number
          id?: string
          observations?: string | null
          responsible_email: string
          responsible_name: string
          responsible_phone: string
        }
        Update: {
          company_document?: string
          company_name?: string
          company_type?: string
          created_at?: string
          employee_count?: number
          id?: string
          observations?: string | null
          responsible_email?: string
          responsible_name?: string
          responsible_phone?: string
        }
        Relationships: [
          {
            foreignKeyName: 'access_requests_company_type_fkey'
            columns: ['company_type']
            isOneToOne: false
            referencedRelation: 'company_types'
            referencedColumns: ['id']
          },
        ]
      }
      companies: {
        Row: {
          city: string
          complement: string | null
          created_at: string
          employee_count: number
          id: string
          name: string
          neighborhood: string
          number: string
          postal_code: string
          state: string
          status: Database['public']['Enums']['client_status']
          street: string
          type: string | null
        }
        Insert: {
          city: string
          complement?: string | null
          created_at?: string
          employee_count: number
          id?: string
          name: string
          neighborhood: string
          number: string
          postal_code: string
          state: string
          status?: Database['public']['Enums']['client_status']
          street: string
          type?: string | null
        }
        Update: {
          city?: string
          complement?: string | null
          created_at?: string
          employee_count?: number
          id?: string
          name?: string
          neighborhood?: string
          number?: string
          postal_code?: string
          state?: string
          status?: Database['public']['Enums']['client_status']
          street?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'clients_company_type_fkey'
            columns: ['type']
            isOneToOne: false
            referencedRelation: 'company_types'
            referencedColumns: ['id']
          },
        ]
      }
      company_types: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          client_id: string | null
          created_at: string
          first_name: string
          id: string
          last_name: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          first_name: string
          id?: string
          last_name: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'users_client_id_fkey'
            columns: ['client_id']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      client_status: 'active' | 'inactive' | 'pending'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
