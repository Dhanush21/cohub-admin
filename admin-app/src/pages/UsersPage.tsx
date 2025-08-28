import { useEffect, useState } from 'react'
import { supabase } from '@shared/supabase/client'

type Profile = {
  id: string
  full_name: string | null
  avatar_url: string | null
}

const getInitials = (name: string | null) => {
  if (!name) return 'U'
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function UsersPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('id, full_name, avatar_url')
          .order('full_name')

        if (error) throw error
        setProfiles(data ?? [])
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load users')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div style={{ minHeight: '100vh', padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      {!loading && !error && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 12,
          }}
        >
          {profiles.map((p) => (
            <div
              key={p.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: 12,
                border: '1px solid #eee',
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#f3f3f3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: '#444',
                }}
              >
                {p.avatar_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.avatar_url}
                    alt={p.full_name ?? 'User'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  getInitials(p.full_name)
                )}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, color: '#111' }}>
                  {p.full_name ?? 'Anonymous User'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

