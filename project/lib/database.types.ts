export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          vat_number: string
          manager_name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          vat_number: string
          manager_name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          vat_number?: string
          manager_name?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          company_id: string | null
          full_name: string | null
          role: string
          created_at: string
        }
        Insert: {
          id: string
          company_id?: string | null
          full_name?: string | null
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string | null
          full_name?: string | null
          role?: string
          created_at?: string
        }
      }
    }
  }
}