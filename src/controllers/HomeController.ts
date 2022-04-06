import { logger } from '@config/logger';
import { Request, Response } from 'express';
import { generatePdf } from 'html-pdf-node';

export const HomeController = {
  index(_req: Request, res: Response): void {
    const data = [
      { label: 'A', value: 5 },
      { label: 'B', value: 4 },
      { label: 'C', value: 2 },
      { label: 'D', value: 10 },
    ];
    res.render('home', {
      data: JSON.stringify(data),
    });
  },

  pdf(req: Request, res: Response): void {
    const route = req.query['route'] || '';
    const landscape = Boolean(req.query['landscape']) || false;
    const file = {
      url: `http://localhost:1337/${route}`,
    };
    const options = {
      format: 'A4',
      landscape
    };
    generatePdf(file, options).then((buffer: Buffer) => {
      logger.info('Sending file');
      res.setHeader('Content-Length', buffer.byteLength);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=home.pdf');
      return res.send(buffer);
    });
  },

  livretEntretien(_req: Request, res: Response): void {
    const data = {
      company: {
        name: 'ERIGERE',
        global: [
          {
            label: 'Nombre de Etat',
            values: [
              {
                label: 'Réalisé',
                value: 2772,
              },
              {
                label: 'Retard < 2mois',
                value: 488,
              },
              {
                label: 'Retard > 2mois',
                value: 586,
              },
            ],
          },
        ],
        categories: [
          {
            label: 'Contrôle sécurité',
            values: [
              {
                label: 'Réalisé',
                value: 1572,
              },
              {
                label: 'Retard < 2mois',
                value: 240,
              },
              {
                label: 'Retard > 2mois',
                value: 446,
              },
            ],
          },
          {
            label: 'Autres',
            values: [
              {
                label: 'Réalisé',
                value: 1200,
              },
              {
                label: 'Retard < 2mois',
                value: 248,
              },
              {
                label: 'Retard > 2mois',
                value: 100,
              },
            ],
          },
        ],
        agencies: [
          {
            label: 'Agence Nord-Est',
            values: [
              {
                label: 'Réalisé',
                value: 822,
              },
              {
                label: 'Retard < 2mois',
                value: 256,
              },
              {
                label: 'Retard > 2mois',
                value: 36,
              },
            ],
          },
          {
            label: 'Agence Nord-Ouest',
            values: [
              {
                label: 'Réalisé',
                value: 1074,
              },
              {
                label: 'Retard < 2mois',
                value: 187,
              },
              {
                label: 'Retard > 2mois',
                value: 261,
              },
            ],
          },
          {
            label: 'Agence Pontoise',
            values: [
              {
                label: 'Réalisé',
                value: 269,
              },
              {
                label: 'Retard < 2mois',
                value: 9,
              },
              {
                label: 'Retard > 2mois',
                value: 155,
              },
            ],
          },
          {
            label: 'Agence Sud-Est',
            values: [
              {
                label: 'Réalisé',
                value: 196,
              },
              {
                label: 'Retard < 2mois',
                value: 3,
              },
              {
                label: 'Retard > 2mois',
                value: 42,
              },
            ],
          },
          {
            label: 'Agence Sud-Ouest',
            values: [
              {
                label: 'Réalisé',
                value: 411,
              },
              {
                label: 'Retard < 2mois',
                value: 33,
              },
              {
                label: 'Retard > 2mois',
                value: 52,
              },
            ],
          },
        ]
      },
      agencies: [
        {
          name: 'Agency 1',
          global: [
            {
              label: 'Nombre de Etat',
              values: [
                {
                  label: 'Réalisé',
                  value: 2772,
                },
                {
                  label: 'Retard < 2mois',
                  value: 488,
                },
                {
                  label: 'Retard > 2mois',
                  value: 586,
                },
              ],
            },
          ],
          categories: [
            {
              label: 'Contrôle sécurité',
              values: [
                {
                  label: 'Réalisé',
                  value: 1572,
                },
                {
                  label: 'Retard < 2mois',
                  value: 240,
                },
                {
                  label: 'Retard > 2mois',
                  value: 446,
                },
              ],
            },
            {
              label: 'Autres',
              values: [
                {
                  label: 'Réalisé',
                  value: 1200,
                },
                {
                  label: 'Retard < 2mois',
                  value: 248,
                },
                {
                  label: 'Retard > 2mois',
                  value: 100,
                },
              ],
            },
          ],
          users: [
            {
              label: 'User 1',
              values: [
                {
                  label: 'Réalisé',
                  value: 822,
                },
                {
                  label: 'Retard < 2mois',
                  value: 256,
                },
                {
                  label: 'Retard > 2mois',
                  value: 36,
                },
              ],
            },
            {
              label: 'User 2',
              values: [
                {
                  label: 'Réalisé',
                  value: 1074,
                },
                {
                  label: 'Retard < 2mois',
                  value: 187,
                },
                {
                  label: 'Retard > 2mois',
                  value: 261,
                },
              ],
            },
            {
              label: 'User 3',
              values: [
                {
                  label: 'Réalisé',
                  value: 269,
                },
                {
                  label: 'Retard < 2mois',
                  value: 9,
                },
                {
                  label: 'Retard > 2mois',
                  value: 155,
                },
              ],
            },
            {
              label: 'User 4',
              values: [
                {
                  label: 'Réalisé',
                  value: 196,
                },
                {
                  label: 'Retard < 2mois',
                  value: 3,
                },
                {
                  label: 'Retard > 2mois',
                  value: 42,
                },
              ],
            },
            {
              label: 'User 5',
              values: [
                {
                  label: 'Réalisé',
                  value: 411,
                },
                {
                  label: 'Retard < 2mois',
                  value: 33,
                },
                {
                  label: 'Retard > 2mois',
                  value: 52,
                },
              ],
            },
          ]
        },
        {
          name: 'Agency 2',
          global: [
            {
              label: 'Nombre de Etat',
              values: [
                {
                  label: 'Réalisé',
                  value: 2772,
                },
                {
                  label: 'Retard < 2mois',
                  value: 488,
                },
                {
                  label: 'Retard > 2mois',
                  value: 586,
                },
              ],
            },
          ],
          categories: [
            {
              label: 'Contrôle sécurité',
              values: [
                {
                  label: 'Réalisé',
                  value: 1572,
                },
                {
                  label: 'Retard < 2mois',
                  value: 240,
                },
                {
                  label: 'Retard > 2mois',
                  value: 446,
                },
              ],
            },
            {
              label: 'Autres',
              values: [
                {
                  label: 'Réalisé',
                  value: 1200,
                },
                {
                  label: 'Retard < 2mois',
                  value: 248,
                },
                {
                  label: 'Retard > 2mois',
                  value: 100,
                },
              ],
            },
          ],
          users: [
            {
              label: 'User 1',
              values: [
                {
                  label: 'Réalisé',
                  value: 822,
                },
                {
                  label: 'Retard < 2mois',
                  value: 256,
                },
                {
                  label: 'Retard > 2mois',
                  value: 36,
                },
              ],
            },
            {
              label: 'User 2',
              values: [
                {
                  label: 'Réalisé',
                  value: 1074,
                },
                {
                  label: 'Retard < 2mois',
                  value: 187,
                },
                {
                  label: 'Retard > 2mois',
                  value: 261,
                },
              ],
            },
            {
              label: 'User 3',
              values: [
                {
                  label: 'Réalisé',
                  value: 269,
                },
                {
                  label: 'Retard < 2mois',
                  value: 9,
                },
                {
                  label: 'Retard > 2mois',
                  value: 155,
                },
              ],
            },
            {
              label: 'User 4',
              values: [
                {
                  label: 'Réalisé',
                  value: 196,
                },
                {
                  label: 'Retard < 2mois',
                  value: 3,
                },
                {
                  label: 'Retard > 2mois',
                  value: 42,
                },
              ],
            },
            {
              label: 'User 5',
              values: [
                {
                  label: 'Réalisé',
                  value: 411,
                },
                {
                  label: 'Retard < 2mois',
                  value: 33,
                },
                {
                  label: 'Retard > 2mois',
                  value: 52,
                },
              ],
            },
          ]
        },
        {
          name: 'Agency 3',
          global: [
            {
              label: 'Nombre de Etat',
              values: [
                {
                  label: 'Réalisé',
                  value: 2772,
                },
                {
                  label: 'Retard < 2mois',
                  value: 488,
                },
                {
                  label: 'Retard > 2mois',
                  value: 586,
                },
              ],
            },
          ],
          categories: [
            {
              label: 'Contrôle sécurité',
              values: [
                {
                  label: 'Réalisé',
                  value: 1572,
                },
                {
                  label: 'Retard < 2mois',
                  value: 240,
                },
                {
                  label: 'Retard > 2mois',
                  value: 446,
                },
              ],
            },
            {
              label: 'Autres',
              values: [
                {
                  label: 'Réalisé',
                  value: 1200,
                },
                {
                  label: 'Retard < 2mois',
                  value: 248,
                },
                {
                  label: 'Retard > 2mois',
                  value: 100,
                },
              ],
            },
          ],
          users: [
            {
              label: 'User 1',
              values: [
                {
                  label: 'Réalisé',
                  value: 822,
                },
                {
                  label: 'Retard < 2mois',
                  value: 256,
                },
                {
                  label: 'Retard > 2mois',
                  value: 36,
                },
              ],
            },
            {
              label: 'User 2',
              values: [
                {
                  label: 'Réalisé',
                  value: 1074,
                },
                {
                  label: 'Retard < 2mois',
                  value: 187,
                },
                {
                  label: 'Retard > 2mois',
                  value: 261,
                },
              ],
            },
            {
              label: 'User 3',
              values: [
                {
                  label: 'Réalisé',
                  value: 269,
                },
                {
                  label: 'Retard < 2mois',
                  value: 9,
                },
                {
                  label: 'Retard > 2mois',
                  value: 155,
                },
              ],
            },
            {
              label: 'User 4',
              values: [
                {
                  label: 'Réalisé',
                  value: 196,
                },
                {
                  label: 'Retard < 2mois',
                  value: 3,
                },
                {
                  label: 'Retard > 2mois',
                  value: 42,
                },
              ],
            },
            {
              label: 'User 5',
              values: [
                {
                  label: 'Réalisé',
                  value: 411,
                },
                {
                  label: 'Retard < 2mois',
                  value: 33,
                },
                {
                  label: 'Retard > 2mois',
                  value: 52,
                },
              ],
            },
          ]
        },
        {
          name: 'Agency 4',
          global: [
            {
              label: 'Nombre de Etat',
              values: [
                {
                  label: 'Réalisé',
                  value: 2772,
                },
                {
                  label: 'Retard < 2mois',
                  value: 488,
                },
                {
                  label: 'Retard > 2mois',
                  value: 586,
                },
              ],
            },
          ],
          categories: [
            {
              label: 'Contrôle sécurité',
              values: [
                {
                  label: 'Réalisé',
                  value: 1572,
                },
                {
                  label: 'Retard < 2mois',
                  value: 240,
                },
                {
                  label: 'Retard > 2mois',
                  value: 446,
                },
              ],
            },
            {
              label: 'Autres',
              values: [
                {
                  label: 'Réalisé',
                  value: 1200,
                },
                {
                  label: 'Retard < 2mois',
                  value: 248,
                },
                {
                  label: 'Retard > 2mois',
                  value: 100,
                },
              ],
            },
          ],
          users: [
            {
              label: 'User 1',
              values: [
                {
                  label: 'Réalisé',
                  value: 822,
                },
                {
                  label: 'Retard < 2mois',
                  value: 256,
                },
                {
                  label: 'Retard > 2mois',
                  value: 36,
                },
              ],
            },
            {
              label: 'User 2',
              values: [
                {
                  label: 'Réalisé',
                  value: 1074,
                },
                {
                  label: 'Retard < 2mois',
                  value: 187,
                },
                {
                  label: 'Retard > 2mois',
                  value: 261,
                },
              ],
            },
            {
              label: 'User 3',
              values: [
                {
                  label: 'Réalisé',
                  value: 269,
                },
                {
                  label: 'Retard < 2mois',
                  value: 9,
                },
                {
                  label: 'Retard > 2mois',
                  value: 155,
                },
              ],
            },
            {
              label: 'User 4',
              values: [
                {
                  label: 'Réalisé',
                  value: 196,
                },
                {
                  label: 'Retard < 2mois',
                  value: 3,
                },
                {
                  label: 'Retard > 2mois',
                  value: 42,
                },
              ],
            },
            {
              label: 'User 5',
              values: [
                {
                  label: 'Réalisé',
                  value: 411,
                },
                {
                  label: 'Retard < 2mois',
                  value: 33,
                },
                {
                  label: 'Retard > 2mois',
                  value: 52,
                },
              ],
            },
          ]
        },
        {
          name: 'Agency 5',
          global: [
            {
              label: 'Nombre de Etat',
              values: [
                {
                  label: 'Réalisé',
                  value: 2772,
                },
                {
                  label: 'Retard < 2mois',
                  value: 488,
                },
                {
                  label: 'Retard > 2mois',
                  value: 586,
                },
              ],
            },
          ],
          categories: [
            {
              label: 'Contrôle sécurité',
              values: [
                {
                  label: 'Réalisé',
                  value: 1572,
                },
                {
                  label: 'Retard < 2mois',
                  value: 240,
                },
                {
                  label: 'Retard > 2mois',
                  value: 446,
                },
              ],
            },
            {
              label: 'Autres',
              values: [
                {
                  label: 'Réalisé',
                  value: 1200,
                },
                {
                  label: 'Retard < 2mois',
                  value: 248,
                },
                {
                  label: 'Retard > 2mois',
                  value: 100,
                },
              ],
            },
          ],
          users: [
            {
              label: 'User 1',
              values: [
                {
                  label: 'Réalisé',
                  value: 822,
                },
                {
                  label: 'Retard < 2mois',
                  value: 256,
                },
                {
                  label: 'Retard > 2mois',
                  value: 36,
                },
              ],
            },
            {
              label: 'User 2',
              values: [
                {
                  label: 'Réalisé',
                  value: 1074,
                },
                {
                  label: 'Retard < 2mois',
                  value: 187,
                },
                {
                  label: 'Retard > 2mois',
                  value: 261,
                },
              ],
            },
            {
              label: 'User 3',
              values: [
                {
                  label: 'Réalisé',
                  value: 269,
                },
                {
                  label: 'Retard < 2mois',
                  value: 9,
                },
                {
                  label: 'Retard > 2mois',
                  value: 155,
                },
              ],
            },
            {
              label: 'User 4',
              values: [
                {
                  label: 'Réalisé',
                  value: 196,
                },
                {
                  label: 'Retard < 2mois',
                  value: 3,
                },
                {
                  label: 'Retard > 2mois',
                  value: 42,
                },
              ],
            },
            {
              label: 'User 5',
              values: [
                {
                  label: 'Réalisé',
                  value: 411,
                },
                {
                  label: 'Retard < 2mois',
                  value: 33,
                },
                {
                  label: 'Retard > 2mois',
                  value: 52,
                },
              ],
            },
          ]
        },
      ]
    }
    res.render('livret-entretien', {
      data
    });
  },

  htmlToPDF(_req: Request, res: Response): void {
    res.render('html-to-pdf');
  }
};
